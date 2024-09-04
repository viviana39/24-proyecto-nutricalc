select 
  continent
  country
from
 country
 order by 
 country desc,
 country asc;
 
 select population
        city
        from
        city
order by 
population asc;

select population,name,percentage
from country
left join countrylanguage on country.code = countrycode
 where language = 'spanish'
 order by Percentage desc;
 
 SELECT GNP/population, name 
 from country;
 