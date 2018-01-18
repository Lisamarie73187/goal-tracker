UPDATE subtask
SET completed = NOT completed, completedDate = $2
WHERE subtaskid = $1;