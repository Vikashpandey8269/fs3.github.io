var books =[
    {title :"Quixote" , author_name :"vikash" , age:42 , rating :4/10},
    {title :"Harry Potter" , author_name :"Ankit" , age:23 , rating :9/10},
    {title :"Alice's Adventures" , author_name :"Mohit" , age:48 , rating :9/10},
    {title :"The Lion" , author_name :"Gaurav" , age:34 , rating :8/10}
];

for (var a=0; a < books.length; a++){
    document.write(  "title  :-  "+"  "+books[a].title +"  "+"author_name  :-"+" "+books[a].author_name +" "+books[a].age+"<br>" );
}

