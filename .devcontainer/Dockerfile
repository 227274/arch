FROM ubuntu:latest

COPY . .

RUN apt-get update && apt-get install -y \
  curl \
  git \
  jq \
  nodejs \
&& apt-get clean \
&& rm -rf /var/lib/apt/lists/*
