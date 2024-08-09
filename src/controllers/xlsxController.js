const XLSX = require("xlsx");

exports.post = (req, res, next) => {
    const workbook = XLSX.utils.book_new();

    const data = [
        ["Nome", "Idade", "Cidade"],
        ["Alice", 30, "Nova York"],
        ["Bob", 90, "San Francisco"]
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    // Define a página
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Salva o arquivo Excel
    XLSX.writeFile(workbook, "./src/dist/Relatorio.xlsx");

    res.status(201).send("Requisição recebida com sucesso!");
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

const fs = require("fs");
const path = require("path");

exports.get = (req, res, next) => {
    const workbook = XLSX.utils.book_new();
    
    const data = [
        ["Nome", "Idade", "Cidade"],
        ["Alice", 30, "Nova York"],
        ["Bob", 90, "San Francisco"]
    ];

    const worksheet = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    const filePath = path.join(__dirname, "../dist/Relatorio.xlsx");
    
    // Salva o arquivo Excel temporariamente
    XLSX.writeFile(workbook, filePath);

    res.setHeader("Content-Disposition", "attachment; filename=Relatorio.xlsx");
    res.setHeader("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");

    fs.createReadStream(filePath).pipe(res).on("finish", () => {
        fs.unlink(filePath, (err) => {
            if (err) console.error("Erro ao remover o arquivo temporário:", err);
        });
    });
};