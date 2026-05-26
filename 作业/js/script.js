// 导航滚动变色
window.addEventListener('scroll', function(){
    const nav = document.getElementById('mainNavbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 点击图片放大弹窗
document.addEventListener('DOMContentLoaded', function(){
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImg = document.getElementById('modalPreviewImg');

    // 点击图片
    document.querySelectorAll('.gallery-img').forEach(img=>{
        img.onclick = function(){
            modalImg.src = this.dataset.imgLarge;
            modal.show();
        };
    });

    // 点击按钮
    document.querySelectorAll('.view-img-btn').forEach(btn=>{
        btn.onclick = function(){
            modalImg.src = this.dataset.img;
            modal.show();
        };
    });
});