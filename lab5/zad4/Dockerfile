FROM alpine

ARG PYTHON_VERSION=3.9.2

ARG PORT=5000

COPY /myapp /myapp

WORKDIR /myapp

RUN apk add \
    wget \
    gcc \
    make \
    zlib-dev \
    libffi-dev \
    openssl-dev \
    musl-dev

RUN cd /opt \
    && wget https://www.python.org/ftp/python/${PYTHON_VERSION}/Python-${PYTHON_VERSION}.tgz \                                              
    && tar xzf Python-${PYTHON_VERSION}.tgz

RUN cd /opt/Python-${PYTHON_VERSION} \ 
    && ./configure --prefix=/usr --enable-optimizations --with-ensurepip=install \
    && make install \
    && rm /opt/Python-${PYTHON_VERSION}.tgz /opt/Python-${PYTHON_VERSION} -rf

RUN pip3 install -r requirements.txt

EXPOSE  ${PORT}

VOLUME ["/myapp/data"]

CMD ["python3", "app.py"]