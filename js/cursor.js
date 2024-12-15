document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.getElementById('cursor');
    let isVisible = false;
    let requestId = null;

    const updateCursorPosition = (e) => {
        if (requestId) return;

        requestId = requestAnimationFrame(() => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            if (!isVisible) {
                cursor.classList.add('visible');
                isVisible = true;
            }
            requestId = null;
        });
    };

    const hideCursor = () => {
        cursor.classList.remove('visible');
        isVisible = false;
    };

    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mouseleave', hideCursor);
    document.addEventListener('mouseenter', () => {
        if (requestId) {
            cancelAnimationFrame(requestId);
            requestId = null;
        }
    });
});