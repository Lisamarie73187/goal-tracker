UPDATE subtask
SET completed = NOT completed
WHERE subtaskid = $1;