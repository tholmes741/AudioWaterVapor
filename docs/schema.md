# Schema Information

## User
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null
password_digest | string    | not null
session_token   | string    | not null
bio             | text      |
email           | string    | not null
avatar          | string    | default


## Tracks
column name | data type | details
------------|-----------|--------------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      |
track_url   | string    | not null
image       | string    | not null, default
play_count  | integer   | default 0
user_id     | integer   | not null, foreign key

## Likes
column name | data type | details
------------|-----------|--------------------------
id          | integer   | primary key
track_id    | integer   | not null, foreign key
user_id     | integer   | not null, foreign key

## Comments
column name | data type | details
------------|-----------|--------------------------
id          | integer   | primary key
body        | text      | not null
track_id    | integer   | not null, foreign key
user_id     | integer   | not null, foreign key

## Follows
column name | data type | details
------------|-----------|--------------------------
id          | integer   | primary key
follower_id | integer   | not null: foreign key
followee_id | integer   | not null: foreign key
