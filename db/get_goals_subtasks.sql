SELECT *
FROM goals
LEFT JOIN subtask ON goals.goalsid = subtask.goalsid
WHERE users = $1;