let passwordInput = document.getElementById('passwordInput');
let eyeIcon = document.getElementById('eyeIcon');

passwordInput.addEventListener('focus', function(){
	eyeIcon.classList.remove('inactive');
	eyeIcon.classList.add('active');
});
// passwordInput.addEventListener('blur', function(){
// 	if (document.activeElement == eyeIcon) {
// 		eyeIcon.classList.remove('inactive');
// 		eyeIcon.classList.add('active');
// 	}else{
// 		eyeIcon.classList.remove('active');
// 		eyeIcon.classList.add('inactive');
// 	}
// });

eyeIcon.addEventListener('click', function(){
	if (passwordInput.getAttribute('type') == 'password') {
		passwordInput.setAttribute('type','text');
		eyeIcon.classList.remove('fa-eye');
		eyeIcon.classList.add('fa-eye-slash');
	}else{
		passwordInput.setAttribute('type','password');
		eyeIcon.classList.remove('fa-eye-slash');
		eyeIcon.classList.add('fa-eye');
	}
});