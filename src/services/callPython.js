import { spawn } from "child_process";

export function callPythonScript(data) {
    return new Promise((resolve, reject) => {
        const python = spawn("python3", ["scripts/analytics.py"]);

        let output = "";
        let errorOutput = "";

        // Kirim data ke Python melalui stdin
        python.stdin.write(JSON.stringify(data));
        python.stdin.end();

        // Tangkap output dari Python
        python.stdout.on("data", (data) => {
            output += data.toString();
        });

        // Tangkap error dari Python
        python.stderr.on("data", (data) => {
            errorOutput += data.toString();
        });

        // Setelah proses selesai
        python.on("close", (code) => {
            if (errorOutput) {
                reject(`Python Error: ${errorOutput}`);
                return;
            }

            try {
                // Pastikan output tidak kosong
                if (!output.trim()) {
                    reject("Python script returned empty output");
                    return;
                }

                // Parse JSON dari Python
                resolve(JSON.parse(output));
            } catch (error) {
                reject(`JSON Parse Error: ${error.message}\nPython Output: ${output}`);
            }
        });
    });
}