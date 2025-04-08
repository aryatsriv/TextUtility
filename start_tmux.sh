#!/bin/bash

#name of the tmux session
SESSION_NAME="TextUtility"

if tmux has-session -t $SESSION_NAME 2>/dev/null; then
  	echo "Session '$SESSION_NAME' already exists. Attaching..."
  	tmux attach -t $SESSION_NAME


else
#create a new tmux session
	tmux new-session -d -s $SESSION_NAME -n nvim

	tmux send-keys -t $SESSION_NAME:1 'nvim .' C-m

	tmux new-window -t $SESSION_NAME -n cmd

        tmux send-keys -t $SESSION_NAME:2 'cd FE ' C-m
        
        tmux send-keys -t $SESSION_NAME:2 'npm run dev' C-m
        
        tmux attach -t $SESSION_NAME
        
        tmux select-window -t my_session:1
fi
