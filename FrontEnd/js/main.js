export async function router(path, updateHistory = true) {
    loadProfileCss("../css/background.css");
    const mainContainer = document.getElementById("main"); 
    if (!path) {
      path = window.location.pathname;
    }
  
    console.log(`Navigating to path: ${path}`);
  
    if (updateHistory) {
      history.pushState(null, "", path + window.location.search); 
    }
  
    // resetDataForReloadingPage(path);
  
//     switch (path) {
//       case "/home":
//       case "/":
//         mainContainer.innerHTML = await fetchHTML("/html/home.html");
//         break;
//       case "/profile":
//         mainContainer.innerHTML = await fetchHTML("/html/profile.html");
//         break;
//       case "/chat":
//         mainContainer.innerHTML = await fetchHTML("/html/chat.html");
//         break;
//       case "/login":
//         mainContainer.innerHTML = await fetchHTML("/html/login.html");
//         break;
//       case "/register":
//         mainContainer.innerHTML = await fetchHTML("/html/register.html");
//         break;
//       default:
//         mainContainer.innerHTML = await fetchHTML("/html/404.html");
//     }
  
//     // Cập nhật các sự kiện cho button (nếu cần)
//     attachButtonEvents();
//   }
  
//   // Hàm tải nội dung HTML
//   async function fetchHTML(filePath) {
//     try {
//       const response = await fetch(filePath);
//       if (!response.ok) throw new Error(`Unable to fetch ${filePath}`);
//       return await response.text();
//     } catch (error) {
//       console.error(error);
//       return `<h1>Không thể tải nội dung!</h1>`;
//     }
//   }
  
//   // Hàm gắn sự kiện cho button
//   function attachButtonEvents() {
//     const buttons = document.querySelectorAll("button[data-navigate]");
//     buttons.forEach((button) => {
//       button.addEventListener("click", () => {
//         const targetPath = button.getAttribute("data-navigate");
//         router(targetPath);
//       });
//     });
  }
  