FROM alpine:3.18

# Install Hugo
ENV HUGO_VERSION=0.148.1
ENV HUGO_TYPE=_extended
ENV HUGO_ID=hugo${HUGO_TYPE}_${HUGO_VERSION}
ADD https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/${HUGO_ID}_Linux-64bit.tar.gz /tmp
RUN tar -xf /tmp/${HUGO_ID}_Linux-64bit.tar.gz -C /tmp \
    && mkdir -p /usr/local/sbin \
    && mv /tmp/hugo /usr/local/sbin/hugo \
    && rm -rf /tmp/${HUGO_ID}_linux_amd64 \
    && rm -rf /tmp/${HUGO_ID}_Linux-64bit.tar.gz \
    && rm -rf /tmp/LICENSE.md \
    && rm -rf /tmp/README.md

# Install dependencies including Python for search index generation
RUN apk add --update git libc6-compat libstdc++ gcompat python3 py3-pip \
    && apk upgrade \
    && apk add --no-cache ca-certificates

# Install Python dependencies for search index generation
RUN pip3 install --no-cache-dir PyYAML

WORKDIR /app
COPY . /app/

# Build command that generates search index first, then builds Hugo site
CMD ["sh", "-c", "python3 generate-search-index.py && hugo"]
