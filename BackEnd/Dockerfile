# set the base image 
FROM python:3.9

# add project files
ADD . /root/app

# set directoty where CMD will execute 
WORKDIR /root/app

COPY requirements.txt ./

# Get pip to download and install requirements:
# RUN apt-get update
RUN python3.9 -m pip install --no-cache-dir -r requirements.txt

# Expose ports
EXPOSE 5000

# default command to execute    
CMD flask run --host=0.0.0.0 --debug --port=5000