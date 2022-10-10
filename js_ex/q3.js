/*3.1*/
function nb_year(p0,percent,aug,p){
    let curr_p=p0;
    let count_years=0;
    while(curr_p < p){
        curr_p= curr_p +(percent/100)*curr_p +aug;
        count_years++;

    }
    return count_years;

}
//console.log(nb_year(1500, 5, 100, 5000));

/*3.2 */
function people_on_the_bus(lst){
    let people=lst[0][0];
    for(let i=1;i<lst.lenght;i++){
        people +=lst[i][0];
        people -=lst[i][1];
    }
    return people;
}