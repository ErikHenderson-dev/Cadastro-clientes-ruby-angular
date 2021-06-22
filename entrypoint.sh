#!/bin/bash
set -e

rm -f /app/tmp/pids/server.pid

if [ $# -eq 0 ]; then
	exec /bin/bash
else
	echo "exec command => $@"
	exec "$@"
fi