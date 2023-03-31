ARG PYTHON_VERSION=3

FROM python:${PYTHON_VERSION}

COPY myapp /myapp

WORKDIR /myapp

RUN pip install -r requirements.txt

CMD ["python", "app.py"]