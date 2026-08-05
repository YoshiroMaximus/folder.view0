#!/bin/bash

CWD=`pwd`

rm -Rf $CWD/src/folder.view0/usr/local/emhttp/plugins/folder.view0/*
cp /usr/local/emhttp/plugins/folder.view0/* $CWD/src/folder.view0/usr/local/emhttp/plugins/folder.view0 -R -v -p
chmod -R 0755 ./
chown -R root:root ./