SELECT * 
FROM subtask
WHERE taskid IN (SELECT taskid FROM task WHERE goalsid = $1)