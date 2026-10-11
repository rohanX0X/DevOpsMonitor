const deployButton = document.getElementById("deploy-button");
const deploymentMessage = document.getElementById("deployment-message");

deployButton.addEventListener("click", function () {
    deploymentMessage.textContent = "Demo deployment in progress...";
    deployButton.disabled = true;
    deployButton.textContent = "Deploying...";

    setTimeout(function () {
        deploymentMessage.textContent = "Demo deployment completed successfully!";
        deployButton.disabled = false;
        deployButton.textContent = "Simulate Deployment";
    }, 1500);
});

function updateDemoMetrics() {
    document.getElementById("cpu").textContent =
        Math.floor(Math.random() * 40 + 20) + "%";

    document.getElementById("memory").textContent =
        Math.floor(Math.random() * 30 + 40) + "%";
}

setInterval(updateDemoMetrics, 3000);