SELECT goals.goalsid, goals.goalname, goals.enddate, subtask.completeddate, subtask.completed
FROM goals
LEFT JOIN subtask ON goals.goalsid = subtask.goalsid
WHERE users = $1;