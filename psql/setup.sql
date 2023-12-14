CREATE DATABASE iphone_prices;

\c iphone_prices;

CREATE TABLE models (
    date DATE NOT NULL, -- YYYY-MM-DD
    version TEXT, -- e.g. "4" or "X"
    edition TEXT, -- e.g. "Normal", "S", "Pro", etc
    scale TEXT, -- "Mini", "Plus", etc
    memory INT NOT NULL, -- gigabytes (e.g. "8", "16", etc)
    price NUMERIC(10,2) NOT NULL
);
