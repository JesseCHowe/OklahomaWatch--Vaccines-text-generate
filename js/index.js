var tooltip = d3
  .select(".hiveChart_container")
  .append("div")
  .attr("class", "toolTip");
var tooltip2 = d3
  .select(".hiveChart_container")
  .append("div")
  .attr("class", "toolTip2");
d3.csv(
  "https://gist.githubusercontent.com/JesseCHowe/0e5388edc13edf1c454446dfdfacb7b9/raw/8037c1461731cb7edf41b4aee2f40b591343e5b6/ve_Vaccination%2520Rates%2520by%2520School.csv",
  type,
  function(error, data) {
    if (error) throw error;

       tooltip.style("display", "inline-block")
      .html(function(d) { 
                    return "<p>Vaccination exemptions are on the rise in Oklahoma along with the rest on the nation, according to the Centers for Disease Control and Prevention.</p>" +
 
"<p>The CDC found that Oklahoma’s 92.6 percent vaccination rate for measles, mumps and rubella vaccinations lags behind the national average of 94.3 percent.</p>" +
 
"<p>A report conducted by the state surveyed 778 elementary schools and includes data on what percentage of students at each respective school  are up to date on their vaccinations according to recommended age and intervals.</p>" +
 
"<p>Vaccination Rate</p>" +

"<p>For <strong>"+ "ACADEMY CENTRAL ES" + "</strong> that vaccination rate is <strong>" +  "81" + "%</strong>, which is <strong>"+ "13" +" </strong> percentage points <strong>" + "below " + "</strong> the national average and <strong>"+"12"+"</strong> percentage points <strong>"+ "below" +"</strong> the state average. This also puts <strong>"+ "ACADEMY CENTRAL ES" + "</strong> <strong>" + "below" + "</strong> the needed vaccination rate for herd immunity, or the vaccination rate needed to protect those who are immunocompromised from diseases such as measles, mumps, and rubella.</p>" +

"<p>Although the vaccination rate for an individual school is important, lagging vaccination rates in the surrounding county can play a major role in the protection of immunocompromised children. <strong>"+ "8" +"</strong> out of the <strong>"+  "50" +"</strong>  schools in the <strong>"+ "TULSA" +"</strong> school district and <strong>"+ "37" +"</strong> out of <strong>"+ "123" +"</strong> in <strong>"+ "TULSA" +"</strong> county have a vaccination rate at or above herd immunity.</p>" +
"<p>Exemptions</p>" +
 
"<p>Oklahoma has three exemption categories: medical, religious or personal, according to the Oklahoma Health Department.</p>" +

             "<p>The CDC said 2.1 percent of Oklahoma public school students and 5.6 percent of private school students claimed at least one kind of exemption, creating a combined estimated exemption rate of 2.2 percent across the state. For <strong>"+ "ACADEMY CENTRAL ES" +"</strong> the exemption rate is <strong>"+ "2" +"</strong>% putting it <strong>"+"0"+" </strong> percentage points <strong>"+ "below" +"</strong> the <strong>"+"Public"+ "</strong> school average.</p>";
                        });
    
    var select = d3.select(".menu div select");
    
    select.on("change", function(d) {
          myFunction()
      });
    
        select.selectAll("option")
      .data(data)
      .enter()
        .append("option")
        .attr("value", function (d) { return d.School; })
        .text(function (d) { return d.School; });
    
    
  }
);

function type(d) {
  if (!d.value) return;
  d.value = +d.value;
  return d;
}

        function myFunction() {
  var x = document.getElementById("mySelect").selectedIndex;
  var y = document.getElementById("mySelect").options;
          
             var select = d3.select(".menu div select");
        
          d3.csv(
  "https://gist.githubusercontent.com/JesseCHowe/0e5388edc13edf1c454446dfdfacb7b9/raw/8037c1461731cb7edf41b4aee2f40b591343e5b6/ve_Vaccination%2520Rates%2520by%2520School.csv",
  type,
  function(error, data) {
    if (error) throw error;

    
       tooltip.style("display", "inline-block")
      .html(function(d) {
         if(data[x].district_count_total > 1) {
           return "<p>Vaccination exemptions are on the rise in Oklahoma along with the rest on the nation, according to the Centers for Disease Control and Prevention.</p>" +
 
"<p>The CDC found that Oklahoma’s 92.6 percent vaccination rate for measles, mumps and rubella vaccinations lags behind the national average of 94.3 percent.</p>" +
 
"<p>A report conducted by the state surveyed 778 elementary schools and includes data on what percentage of students at each respective school  are up to date on their vaccinations according to recommended age and intervals.</p>" +
 
"<p>Vaccination Rate</p>" +

"<p>For <strong>"+ data[x].School + "</strong> that vaccination rate is <strong>" +  100*(data[x].value) + "%</strong>, which is <strong>"+ Math.abs(Math.round((1000*(data[x].value - 0.943))/10)) +" </strong> percentage points <strong>" + data[x].perc_national_avg_simple + "</strong> the national average and <strong>"+ Math.abs(Math.round(1000*(data[x].oklahoma_avg)/10)) +"</strong> percentage points <strong>"+ data[x].oklahoma_avg_simple +"</strong> the state average. This also puts <strong>"+ data[x].School + "</strong> <strong>" + data[x].herd_immunity + "</strong> the needed vaccination rate for herd immunity, or the vaccination rate needed to protect those who are immunocompromised from diseases such as measles, mumps, and rubella.</p>" +

"<p>Although the vaccination rate for an individual school is important, lagging vaccination rates in the surrounding county can play a major role in the protection of immunocompromised children. <strong>"+ data[x].district_count_vac +"</strong> out of the <strong>"+  data[x].district_count_total +"</strong>  schools in the <strong>"+ data[x].District +"</strong> school district and <strong>"+data[x].count_vax_county +"</strong> out of <strong>"+ data[x].count_total_county +"</strong> in <strong>"+data[x].id +"</strong> county have a vaccination rate at or above herd immunity.</p>" +
"<p>Exemptions</p>" +
 
"<p>Oklahoma has three exemption categories: medical, religious or personal, according to the Oklahoma Health Department.</p>" +

             "<p>The CDC said 2.1 percent of Oklahoma public school students and 5.6 percent of private school students claimed at least one kind of exemption, creating a combined estimated exemption rate of 2.2 percent across the state. For <strong>"+ data[x].School +"</strong> the exemption rate is <strong>"+ 100*(data[x].exempt) +"</strong>% putting it <strong>"+Math.round(1000*(data[x].public_private_percnt)/10)+" </strong> percentage points <strong>"+ data[x].public_private_percent_simple +"</strong> the <strong>"+data[x].Type + "</strong> school average.</p>";
         
           
         }
         else{
           return "<p>Vaccination exemptions are on the rise in Oklahoma along with the rest on the nation, according to the Centers for Disease Control and Prevention.</p>" +
 
"<p>The CDC found that Oklahoma’s 92.6 percent vaccination rate for measles, mumps and rubella vaccinations lags behind the national average of 94.3 percent.</p>" +
 
"<p>A report conducted by the state surveyed 778 elementary schools and includes data on what percentage of students at each respective school  are up to date on their vaccinations according to recommended age and intervals.</p>" +
 
"<p>Vaccination Rate</p>" +

"<p>For <strong>"+ data[x].School + "</strong> that vaccination rate is <strong>" +  100*(data[x].value) + "%</strong>, which is <strong>"+ Math.abs(Math.round((1000*(data[x].value - 0.943))/10)) +" </strong> percentage points <strong>" + data[x].perc_national_avg_simple + "</strong> the national average and <strong>"+ Math.abs(Math.round(1000*(data[x].oklahoma_avg)/10)) +"</strong> percentage points <strong>"+ data[x].oklahoma_avg_simple +"</strong> the state average. This also puts <strong>"+ data[x].School + "</strong> <strong>" + data[x].herd_immunity + "</strong> the needed vaccination rate for herd immunity, or the vaccination rate needed to protect those who are immunocompromised from diseases such as measles, mumps, and rubella.</p>" +

"<p>Although the vaccination rate for an individual school is important, lagging vaccination rates in the surrounding county can play a major role in the protection of immunocompromised children. <strong>"+ +data[x].count_vax_county +"</strong> out of <strong>"+ data[x].count_total_county +"</strong> in <strong>"+data[x].id +"</strong> county have a vaccination rate at or above herd immunity.</p>" +
"<p>Exemptions</p>" +
 
"<p>Oklahoma has three exemption categories: medical, religious or personal, according to the Oklahoma Health Department.</p>" +

             "<p>The CDC said 2.1 percent of Oklahoma public school students and 5.6 percent of private school students claimed at least one kind of exemption, creating a combined estimated exemption rate of 2.2 percent across the state. For <strong>"+ data[x].School +"</strong> the exemption rate is <strong>"+ 100*(data[x].exempt) +"</strong>% putting it <strong>"+Math.round(1000*(data[x].public_private_percnt)/10)+" </strong> percentage points <strong>"+ data[x].public_private_percent_simple +"</strong> the <strong>"+data[x].Type + "</strong> school average.</p>";
         }
            });
  }
);
}