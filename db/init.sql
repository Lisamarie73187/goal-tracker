CREATE TABLE users (
  id SERIAL,
  auth0_id TEXT,
  email TEXT,
  pictureUrl TEXT,
  name TEXT
);

CREATE TABLE goals (
    goalsid SERIAL PRIMARY KEY,
    users INTEGER REFERENCES users(id),
    goalname TEXT,
    description TEXT,
    startdate TEXT,
    enddate TEXT
);

CREATE TABLE task (
    taskid SERIAL PRIMARY KEY,
    taskname TEXT,
    completed BOOLEAN,
    date TEXT,
    goalsid INTEGER REFERENCES goals(goalsid)
);

CREATE TABLE subtask (
    subtaskid SERIAL PRIMARY KEY,
    subtaskname TEXT,
    completed BOOLEAN,
    date TEXT,
    completeddate TEXT,
    taskid INTEGER REFERENCES task(taskid),
    goalsid INTEGER REFERENCES goals(goalsid)
);



