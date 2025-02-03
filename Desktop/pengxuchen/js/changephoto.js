// 照片轮播系统
const photos = ["img/photo1.jpg", "img/photo2.jpg", "img/photo3.jpg"];
let currentPhotoIndex = 0;
const photoElement = document.getElementById("profile-photo");

function cyclePhotos() {
    photoElement.style.opacity = 0;
    setTimeout(() => {
        currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
        photoElement.src = photos[currentPhotoIndex];
        photoElement.style.opacity = 1;
    }, 600);
}

// 初始化首张照片
photoElement.src = photos[0];
setInterval(cyclePhotos, 5000);

// 滚动触发动画系统
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.scroll-effect, .scroll-effect-item').forEach(el => observer.observe(el));

// 视差增强系统
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     document.querySelector('.animated-background').style.transform = 
//         `translateY(${scrolled * 1}px) rotate(${scrolled * 0.1}deg)`;
// });

// 光标轨迹特效
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
    document.body.appendChild(trail);
    setTimeout(() => trail.remove(), 1000);
});


const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const content = header.nextElementSibling;

        // 切换当前项的展开状态
        if (item.classList.contains('active')) {
            item.classList.remove('active');
            content.style.maxHeight = '0';
            content.style.padding = '0 20px';
        } else {
            // 关闭其他展开的项
            document.querySelectorAll('.accordion-item.active').forEach(activeItem => {
                activeItem.classList.remove('active');
                activeItem.querySelector('.accordion-content').style.maxHeight = '0';
                activeItem.querySelector('.accordion-content').style.padding = '0 20px';
            });

            // 展开当前项
            item.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.padding = '15px 20px';
        }
    });
});