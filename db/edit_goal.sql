UPDATE goals
SET goalsid= $1, goalname = $2, description = $3, startdate = $4, enddate = $5
WHERE goalsid = $1;