function togglePwd(){pwd.type=pwd.type==='password'?'text':'password'}
function login(){
 if(uid.value==='9483115495'&&pwd.value==='Anand@1977'){
   location='dashboard.html';
 }else{
   alert('Invalid User ID or Password');
 }
}