var arr=new Array();
var i,j,n=0;
document.getElementById('add').addEventListener('click',function(){
    arr[n]=document.getElementById('value').value;
    n=n+1;
    document.getElementById('value').value="";
});
document.getElementById('veiw').addEventListener('click',function(){
    var str="<table border=1 >";
    str=str+"<tr><th>Index</th><th>Value</th</tr>";
    for(i=0;i<n;i++){
        str=str+"<tr><td>"+(i+1)+"</td><td> "+arr[i] +" </td></tr>";
    }
    str=str+"</table>";
    document.getElementById('demo').innerHTML=str;
});
document.getElementById('search').addEventListener('click',function(){
    var b=0;
    var str="<table border=1 ";
    str=str+"<tr><th>Index</th><th>Value</th</tr>";
    var search=document.getElementById('value').value;
    for(i=0;i<n;i++){
        if(search== arr[i]){
            b=1;
            str=str+"<tr><td>"+(i+1)+"</td><td> "+arr[i] +" </td></tr>";
        }
    }
    str=str+"</table>";
    document.getElementById('demo').innerHTML=str;
    if(b==0){
        alert("Search Not found..!");
    }
});
document.getElementById('delete').addEventListener('click',function(){
    var b=0;
    var str="<table border=1>";
    str=str+"<tr><th>Index</th><th>Value</th</tr>";
    var del=document.getElementById('value').value;
    for(i=0;i<n;i++){
        if(del== arr[i]){
            for(j=i;j<n;j++){
                arr[j]=arr[j+1];
            }
            n=n-1;
            b=1;
            str=str+"</table>";
            document.getElementById('demo').innerHTML=str;
        }
    }
    if(b==0){
        alert("Search Not found..!");
    }
    else{
        alert("Delete Completed..!");
    }
});