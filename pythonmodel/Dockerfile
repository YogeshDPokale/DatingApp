FROM python:3.10
WORKDIR /app
COPY main.py /app/
RUN python -m pip install scikit-learn
RUN python -m pip install uvicorn
RUN python -m pip install fastapi
CMD ["python","main.py"]
