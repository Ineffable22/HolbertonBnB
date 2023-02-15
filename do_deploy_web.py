#!/usr/bin/python3
"""
Fabric script based on the file 2-do_deploy_web_static.py that creates and
distributes an archive to the web servers
"""

from fabric.api import env, local, put, run
from datetime import datetime
from os.path import exists, isdir
env.hosts = ['142.44.167.228', '144.217.246.195']


def do_pack(folder: str) -> str:
    """generates a tgz archive"""
    file_name = ""
    try:
        date = datetime.now().strftime("%Y%m%d%H%M%S")
        if isdir("versions") is False:
            local("mkdir -p versions")
        
        file_name = "versions/web_static_{}.tgz".format(date)
        local("tar -cvzf {} {}}".format(file_name, folder))
    except Exception as e:
        print("Error : {}".format(e))
    return file_name


def do_upload(archive_path: str) -> bool:
    """distributes an archive to the web servers"""
    if exists(archive_path) is False:
        return False
    try:
        file = archive_path.split("/")[-1]
        folder = file.split(".")[0]
        print(f"Uploading {folder}... ")
        put(archive_path, '/tmp/{}'.format(file))
        run('rm -rf /data/{}'.format(folder))
        run('mkdir -p /data/{}/'.format(folder))
        run('tar -xzf /tmp/{} -C /data/{}/'.format(file, folder))
        run('rm /tmp/{}'.format(file))
        run('mv data/{0}/{0}/* /data/{0}/'.format(folder))
        run('rm -rf data/{0}/{0}'.format(folder))
        print("done.")
    except Exception:
        raise (Exception)
    return True


def deploy() -> bool:
    """Creates and distributes an archive to the web servers"""
    archive_path = do_pack('all')
    if archive_path is None:
        return False
    return do_upload(archive_path)

def restart():
    """Restarts the HolbertonBnB WSGI apps."""
    try:
        run("pkill gunicorn")
    except Exception:
        pass

    print("Restarting Gunicorn instances... ")
    gunicorn = "/home/ubuntu/.local/bin/gunicorn"
    run(
        f"{gunicorn} --chdir /data/ --bind 0.0.0.0:5001 web_flask.hbnb:app --daemon"
    )
    run(
        f"{gunicorn} --chdir /data/ --bind 0.0.0.0:5002 api.v1.app:app --daemon"
    )
