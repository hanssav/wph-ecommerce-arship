document.addEventListener('DOMContentLoaded', () => {
  const components = document.querySelectorAll('[data-component]');

  components.forEach((el) => {
    const name = el.getAttribute('data-component');
    fetch(`./components/${name}.html`)
      .then((res) => res.text())
      .then((html) => {
        el.innerHTML = html;

        // --- jalankan script yang ada di dalam component ---
        const scripts = el.querySelectorAll('script');
        scripts.forEach((oldScript) => {
          const newScript = document.createElement('script');
          if (oldScript.src) {
            newScript.src = oldScript.src; // kalau external js
          } else {
            newScript.textContent = oldScript.textContent; // kalau inline js
          }
          document.body.appendChild(newScript);
        });
      })
      .catch((err) => console.error(`Gagal load component ${name}:`, err));
  });
});
