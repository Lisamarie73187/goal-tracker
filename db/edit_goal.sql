UPDATE goals
SET goalname = $1, description = $2, startdate = $3, enddate = $4
WHERE goalsid = $1;