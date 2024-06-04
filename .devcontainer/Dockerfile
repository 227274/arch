FROM ubuntu:latest

COPY . .

RUN apt-get update && apt-get install -y \
  autoconf \
  automake \
  build-essential \
  curl \
  gawk \
  git \
  libssl-dev \
  libtool \
  jq \
  make \
  nodejs \
  perl \
  zip \
  zlib1g-dev \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/227274/curl.git --depth 1 \
  && cd curl \
  && autoreconf -fi \
  && ./configure --with-openssl \
  && make \
  && make install \
  && apt-get remove -y curl \
  && apt-get install -y libcurl4 \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*
