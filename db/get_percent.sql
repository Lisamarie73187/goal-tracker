SELECT completed
FROM subtask
WHERE goalsid = $1 AND completed = true;