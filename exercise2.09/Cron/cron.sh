#!/bin/bash
randomurl=$(curl  -w "%{redirect_url}" -o /dev/null -s "https://en.wikipedia.org/wiki/Special:Random")
content="read ${randomurl}"

readdata()
{
  cat <<EOF
{
  "content": "$content"
}
EOF
}
curl -H "Content-Type:application/json" --data "$(readdata)" -X POST http://server-svc:1234/todo