<template>
<div>
    <div class="footer">
        <div class="footer-text">
            <p>Hi!</p>
            <h3>
                <p>Wanna say something, or grab a cup of coffee, or discuss on any projects,</p>
                <p>Connect with me on</p>
                <a href="mailto:balajilitsv@gmail.com" target="_blank"><img src="./../assets/mail.png" alt="mail"></a>
                <a href="https://www.linkedin.com/in/balaji-saravanan/" target="_blank"><img src="./../assets/linkedin.png" alt="linkedin"></a>
                <a href="https://www.instagram.com/balaji_twoby12" target="_blank"><img src="./../assets/instagram.webp" alt="instagram"></a>
                <a href="https://twitter.com/balaji_twoby12" target="_blank"><img src="./../assets/twitter.png" alt="twitter"></a>
            </h3>
            <h1>
                -Balaji SV
            </h1>
        </div>
    </div>
    <div class="avatar-combo">
        <div class="avatar avatar1"></div>
    </div>
</div>
</template>

<style scoped>
.footer {
    display: flex;
    justify-content: center;
    margin: 10rem 0 2rem 0;
}

.footer-text {
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
    font-family: 'Courier New', Courier, monospace;
}

.avatar {
    width: 12rem;
    height: 12rem;
    background-size: cover;
    background-position: top center;
    border-radius: 70%;
}

.avatar-combo {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.avatar1 {
    background-image: url('./../assets/goalAvatar.png');
}

a>img {
    height: 3rem;
    width: 3rem;
}
</style>
