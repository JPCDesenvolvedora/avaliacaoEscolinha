function btnCalcular() {
    //Área Atleta Thiago
    let resultadoThiago = document.getElementById("resultadoThiago");
    let resThiago = document.getElementById("resThiago");

    let passeThiago = document.querySelector('input[name="radio_passe"]:checked').value;
    let chuteThiago = document.querySelector('input[name="radio_chute"]:checked').value;
    let equilibrioThiago = document.querySelector('input[name="radio_equilibrio"]:checked').value;
    let agilidadeThiago = document.querySelector('input[name="radio_agil"]:checked').value;
    let marcacaoThiago = document.querySelector('input[name="radio_marc"]:checked').value;
    let ataqueThiago = document.querySelector('input[name="radio_ataq"]:checked').value;
    let coletividadeThiago = document.querySelector('input[name="radio_coletivo"]:checked').value;

    let passeBaixoThiago = 0;
    let passeMedioThiago = 0;
    let passeBomThiago = 0;
    let passeExcelenteThiago = 0;

    let chuteBaixoThiago = 0;
    let chuteMedioThiago = 0;
    let chuteBomThiago = 0;
    let chuteExcelenteThiago = 0;

    let equilibrioBaixoThiago = 0;
    let equilibrioMedioThiago = 0;
    let equilibrioBomThiago = 0;
    let equilibrioExcelenteThiago = 0;

    let agilidadeBaixoThiago = 0;
    let agilidadeMedioThiago = 0;
    let agilidadeBomThiago = 0;
    let agilidadeExcelenteThiago = 0;

    let marcacaoBaixoThiago = 0;
    let marcacaoMedioThiago = 0;
    let marcacaoBomThiago = 0;
    let marcacaoExcelenteThiago = 0;

    let ataqueBaixoThiago = 0;
    let ataqueMedioThiago = 0;
    let ataqueBomThiago = 0;
    let ataqueExcelenteThiago = 0;

    let coletividadeBaixoThiago = 0;
    let coletividadeMedioThiago = 0;
    let coletividadeBomThiago = 0;
    let coletividadeExcelenteThiago = 0;

    //Verificador passe
    if(passeThiago == "baixo") {
        passeBaixoThiago++;
    } else if(passeThiago == "medio") {
        passeMedioThiago++;
    } else if(passeThiago == "bom") {
        passeBomThiago++;
    } else if(passeThiago == "excelente") {
        passeExcelenteThiago++;
    }

    //Verificador chute
    if(chuteThiago == "baixo") {
        chuteBaixoThiago++;
    } else if(chuteThiago == "medio") {
        chuteMedioThiago++;
    } else if(chuteThiago == "bom") {
        chuteBomThiago++;
    } else if(chuteThiago == "excelente") {
        chuteExcelenteThiago++;
    }

    //Verificador equilibrio
    if(equilibrioThiago == "baixo") {
        equilibrioBaixoThiago++;
    } else if(equilibrioThiago == "medio") {
        equilibrioMedioThiago++;
    } else if(passeThiago == "bom") {
        equilibrioBomThiago++;
    } else if(equilibrioThiago == "excelente") {
        equilibrioExcelenteThiago++;
    }

    //Verificador agilidade
    if(agilidadeThiago == "baixo") {
        agilidadeBaixoThiago++;
    } else if(agilidadeThiago == "medio") {
        agilidadeMedioThiago++;
    } else if(agilidadeThiago == "bom") {
        agilidadeBomThiago++;
    } else if(agilidadeThiago == "excelente") {
        agilidadeExcelenteThiago++;
    }

    //Verificador marcacao
    if(marcacaoThiago == "baixo") {
        marcacaoBaixoThiago++;
    } else if(marcacaoThiago == "medio") {
        marcacaoMedioThiago++;
    } else if(marcacaoThiago == "bom") {
        marcacaoBomThiago++;
    } else if(marcacaoThiago == "excelente") {
        marcacaoExcelenteThiago++;
    }

    //Verificador ataque
    if(ataqueThiago == "baixo") {
        ataqueBaixoThiago++;
    } else if(ataqueThiago == "medio") {
        ataqueMedioThiago++;
    } else if(ataqueThiago == "bom") {
        ataqueBomThiago++;
    } else if(ataqueThiago == "excelente") {
        ataqueExcelenteThiago++;
    }

    //Verificador coletividade
    if(coletividadeThiago == "baixo") {
        coletividadeBaixoThiago++;
    } else if(coletividadeThiago == "medio") {
        coletividadeMedioThiago++;
    } else if(coletividadeThiago == "bom") {
        coletividadeBomThiago++;
    } else if(coletividadeThiago == "excelente") {
        coletividadeExcelenteThiago++;
    }

    //Cálculo das médias
    let mediaBaixoThiago = passeBaixoThiago + chuteBaixoThiago + equilibrioBaixoThiago + agilidadeBaixoThiago + marcacaoBaixoThiago + ataqueBaixoThiago + coletividadeBaixoThiago;
    let mediaMedioThiago = passeMedioThiago + chuteMedioThiago + equilibrioMedioThiago + agilidadeMedioThiago + marcacaoMedioThiago + ataqueMedioThiago + coletividadeMedioThiago;
    let mediaBomThiago = passeBomThiago + chuteBomThiago + equilibrioBomThiago + agilidadeBomThiago + marcacaoBomThiago + ataqueBomThiago + coletividadeBomThiago;
    let mediaExcelenteThiago = passeExcelenteThiago + chuteExcelenteThiago + equilibrioExcelenteThiago + agilidadeExcelenteThiago + marcacaoExcelenteThiago + ataqueExcelenteThiago + coletividadeExcelenteThiago; 

    let mediaThiago;

    if(mediaBaixoThiago>mediaMedioThiago && mediaBaixoThiago>mediaBomThiago && mediaBaixoThiago>mediaExcelenteThiago) {
        resultadoThiago.style.display = 'block';
        resThiago.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaThiago = 1;
    } else if(mediaMedioThiago>mediaBaixoThiago && mediaMedioThiago>mediaBomThiago && mediaMedioThiago>mediaExcelenteThiago) {
        resultadoThiago.style.display = 'block';
        resThiago.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaThiago = 2;
    } else if(mediaBomThiago>mediaBaixoThiago && mediaBomThiago>mediaMedioThiago && mediaBomThiago>mediaExcelenteThiago) {
        resultadoThiago.style.display = 'block';
        resThiago.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaThiago = 3;
    } else if(mediaExcelenteThiago>mediaBaixoThiago && mediaExcelenteThiago>mediaMedioThiago && mediaExcelenteThiago>mediaBomThiago) {
        resultadoThiago.style.display = 'block';
        resThiago.innerHTML = "O Atleta está com a média geral Excelente, deve continuar se dedicando para manter esse ritmo!";
        mediaThiago = 4;
    } else if(mediaBaixoThiago == mediaMedioThiago){
        resultadoThiago.style.display = 'block';
        resThiago.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaThiago = 1;
    } else if(mediaBaixoThiago==mediaBomThiago){
        resultadoThiago.style.display = 'block';
        resThiago.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaThiago = 2;
    } else if(mediaMedioThiago==mediaBomThiago){
        resultadoThiago.style.display = 'block';
        resThiago.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaThiago = 2;
    } else if(mediaBaixoThiago==mediaExcelenteThiago){
        resultadoThiago.style.display = 'block';
        resThiago.innerHTML = "O Atleta está com a média geral Média, precisa melhorar o desempenho!";
        mediaThiago = 2;
    } else if(mediaMedioThiago==mediaExcelenteThiago){
        resultadoThiago.style.display = 'block';
        resThiago.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaThiago = 3;
    } else if(mediaBomThiago==mediaExcelenteThiago){
        resultadoThiago.style.display = 'block';
        resThiago.innerHTML = "O Atleta está com a média geral muito boa, precisa melhorar um pouco mais o desempenho!";
        mediaThiago = 4;
    }
    //Fim área do Thiago

    //Área Atleta Henry
    let resultadoHenry = document.getElementById("resultadoHenry");
    let resHenry = document.getElementById("resHenry");

    let passeHenry = document.querySelector('input[name="radio_passe1"]:checked').value;
    let chuteHenry = document.querySelector('input[name="radio_chute1"]:checked').value;
    let equilibrioHenry = document.querySelector('input[name="radio_equilibrio1"]:checked').value;
    let agilidadeHenry = document.querySelector('input[name="radio_agil1"]:checked').value;
    let marcacaoHenry = document.querySelector('input[name="radio_marc1"]:checked').value;
    let ataqueHenry = document.querySelector('input[name="radio_ataq1"]:checked').value;
    let coletividadeHenry = document.querySelector('input[name="radio_coletivo1"]:checked').value;

    let passeBaixoHenry = 0;
    let passeMedioHenry = 0;
    let passeBomHenry = 0;
    let passeExcelenteHenry = 0;

    let chuteBaixoHenry = 0;
    let chuteMedioHenry = 0;
    let chuteBomHenry = 0;
    let chuteExcelenteHenry = 0;

    let equilibrioBaixoHenry = 0;
    let equilibrioMedioHenry = 0;
    let equilibrioBomHenry = 0;
    let equilibrioExcelenteHenry = 0;

    let agilidadeBaixoHenry = 0;
    let agilidadeMedioHenry = 0;
    let agilidadeBomHenry = 0;
    let agilidadeExcelenteHenry = 0;

    let marcacaoBaixoHenry = 0;
    let marcacaoMedioHenry = 0;
    let marcacaoBomHenry = 0;
    let marcacaoExcelenteHenry = 0;

    let ataqueBaixoHenry = 0;
    let ataqueMedioHenry = 0;
    let ataqueBomHenry = 0;
    let ataqueExcelenteHenry = 0;

    let coletividadeBaixoHenry = 0;
    let coletividadeMedioHenry = 0;
    let coletividadeBomHenry = 0;
    let coletividadeExcelenteHenry = 0;

    //Verificador passe
    if(passeHenry == "baixo") {
        passeBaixoHenry++;
    } else if(passeHenry == "medio") {
        passeMedioHenry++;
    } else if(passeHenry == "bom") {
        passeBomHenry++;
    } else if(passeHenry == "excelente") {
        passeExcelenteHenry++;
    }

    //Verificador chute
    if(chuteHenry == "baixo") {
        chuteBaixoHenry++;
    } else if(chuteHenry == "medio") {
        chuteMedioHenry++;
    } else if(chuteHenry == "bom") {
        chuteBomHenry++;
    } else if(chuteHenry == "excelente") {
        chuteExcelenteHenry++;
    }

    //Verificador equilibrio
    if(equilibrioHenry == "baixo") {
        equilibrioBaixoHenry++;
    } else if(equilibrioHenry == "medio") {
        equilibrioMedioHenry++;
    } else if(passeHenry == "bom") {
        equilibrioBomHenry++;
    } else if(equilibrioHenry == "excelente") {
        equilibrioExcelenteHenry++;
    }

    //Verificador agilidade
    if(agilidadeHenry == "baixo") {
        agilidadeBaixoHenry++;
    } else if(agilidadeHenry == "medio") {
        agilidadeMedioHenry++;
    } else if(agilidadeHenry == "bom") {
        agilidadeBomHenry++;
    } else if(agilidadeHenry == "excelente") {
        agilidadeExcelenteHenry++;
    }

    //Verificador marcacao
    if(marcacaoHenry == "baixo") {
        marcacaoBaixoHenry++;
    } else if(marcacaoHenry == "medio") {
        marcacaoMedioHenry++;
    } else if(marcacaoHenry == "bom") {
        marcacaoBomHenry++;
    } else if(marcacaoHenry == "excelente") {
        marcacaoExcelenteHenry++;
    }

    //Verificador ataque
    if(ataqueHenry == "baixo") {
        ataqueBaixoHenry++;
    } else if(ataqueHenry == "medio") {
        ataqueMedioHenry++;
    } else if(ataqueHenry == "bom") {
        ataqueBomHenry++;
    } else if(ataqueHenry == "excelente") {
        ataqueExcelenteHenry++;
    }

    //Verificador coletividade
    if(coletividadeHenry == "baixo") {
        coletividadeBaixoHenry++;
    } else if(coletividadeHenry == "medio") {
        coletividadeMedioHenry++;
    } else if(coletividadeHenry == "bom") {
        coletividadeBomHenry++;
    } else if(coletividadeHenry == "excelente") {
        coletividadeExcelenteHenry++;
    }

    //Cálculo das médias
    let mediaBaixoHenry = passeBaixoHenry + chuteBaixoHenry + equilibrioBaixoHenry + agilidadeBaixoHenry + marcacaoBaixoHenry + ataqueBaixoHenry + coletividadeBaixoHenry;
    let mediaMedioHenry = passeMedioHenry + chuteMedioHenry + equilibrioMedioHenry + agilidadeMedioHenry + marcacaoMedioHenry + ataqueMedioHenry + coletividadeMedioHenry;
    let mediaBomHenry = passeBomHenry + chuteBomHenry + equilibrioBomHenry + agilidadeBomHenry + marcacaoBomHenry + ataqueBomHenry + coletividadeBomHenry;
    let mediaExcelenteHenry = passeExcelenteHenry + chuteExcelenteHenry + equilibrioExcelenteHenry + agilidadeExcelenteHenry + marcacaoExcelenteHenry + ataqueExcelenteHenry + coletividadeExcelenteHenry; 

    let mediaHenry;

    if(mediaBaixoHenry>mediaMedioHenry && mediaBaixoHenry>mediaBomHenry && mediaBaixoHenry>mediaExcelenteHenry) {
        resultadoHenry.style.display = 'block';
        resHenry.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaHenry = 1;
    } else if(mediaMedioHenry>mediaBaixoHenry && mediaMedioHenry>mediaBomHenry && mediaMedioHenry>mediaExcelenteHenry) {
        resultadoHenry.style.display = 'block';
        resHenry.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaHenry = 2;
    } else if(mediaBomHenry>mediaBaixoHenry && mediaBomHenry>mediaMedioHenry && mediaBomHenry>mediaExcelenteHenry) {
        resultadoHenry.style.display = 'block';
        resHenry.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaHenry = 3;
    } else if(mediaExcelenteHenry>mediaBaixoHenry && mediaExcelenteHenry>mediaMedioHenry && mediaExcelenteHenry>mediaBomHenry) {
        resultadoHenry.style.display = 'block';
        resHenry.innerHTML = "O Atleta está com a média geral Excelente, deve continuar se dedicando para manter esse ritmo!";
        mediaHenry = 4;
    } else if(mediaBaixoHenry == mediaMedioHenry){
        resultadoHenry.style.display = 'block';
        resHenry.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaHenry = 1;
    } else if(mediaBaixoHenry==mediaBomHenry){
        resultadoHenry.style.display = 'block';
        resHenry.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaHenry = 2;
    } else if(mediaMedioHenry==mediaBomHenry){
        resultadoHenry.style.display = 'block';
        resHenry.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaHenry = 2;
    } else if(mediaBaixoHenry==mediaExcelenteHenry){
        resultadoHenry.style.display = 'block';
        resHenry.innerHTML = "O Atleta está com a média geral Média, precisa melhorar o desempenho!";
        mediaHenry = 2;
    } else if(mediaMedioHenry==mediaExcelenteHenry){
        resultadoHenry.style.display = 'block';
        resHenry.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaHenry = 3;
    } else if(mediaBomHenry==mediaExcelenteHenry){
        resultadoHenry.style.display = 'block';
        resHenry.innerHTML = "O Atleta está com a média geral muito boa, precisa melhorar um pouco mais o desempenho!";
        mediaHenry = 4;
    }
    //Fim área do Henry

    //Área Atleta Matheus
    let resultadoMatheus = document.getElementById("resultadoMatheus");
    let resMatheus = document.getElementById("resMatheus");

    let passeMatheus = document.querySelector('input[name="radio_pass"]:checked').value;
    let chuteMatheus = document.querySelector('input[name="radio_chut"]:checked').value;
    let equilibrioMatheus = document.querySelector('input[name="radio_equilibri"]:checked').value;
    let agilidadeMatheus = document.querySelector('input[name="radio_agi"]:checked').value;
    let marcacaoMatheus = document.querySelector('input[name="radio_mar"]:checked').value;
    let ataqueMatheus = document.querySelector('input[name="radio_ata"]:checked').value;
    let coletividadeMatheus = document.querySelector('input[name="radio_coletiv"]:checked').value;

    let passeBaixoMatheus = 0;
    let passeMedioMatheus = 0;
    let passeBomMatheus = 0;
    let passeExcelenteMatheus = 0;

    let chuteBaixoMatheus = 0;
    let chuteMedioMatheus = 0;
    let chuteBomMatheus = 0;
    let chuteExcelenteMatheus = 0;

    let equilibrioBaixoMatheus = 0;
    let equilibrioMedioMatheus = 0;
    let equilibrioBomMatheus = 0;
    let equilibrioExcelenteMatheus = 0;

    let agilidadeBaixoMatheus = 0;
    let agilidadeMedioMatheus = 0;
    let agilidadeBomMatheus = 0;
    let agilidadeExcelenteMatheus = 0;

    let marcacaoBaixoMatheus = 0;
    let marcacaoMedioMatheus = 0;
    let marcacaoBomMatheus = 0;
    let marcacaoExcelenteMatheus = 0;

    let ataqueBaixoMatheus = 0;
    let ataqueMedioMatheus = 0;
    let ataqueBomMatheus = 0;
    let ataqueExcelenteMatheus = 0;

    let coletividadeBaixoMatheus = 0;
    let coletividadeMedioMatheus = 0;
    let coletividadeBomMatheus = 0;
    let coletividadeExcelenteMatheus = 0;

    //Verificador passe
    if(passeMatheus == "baixo") {
        passeBaixoMatheus++;
    } else if(passeMatheus == "medio") {
        passeMedioMatheus++;
    } else if(passeMatheus == "bom") {
        passeBomMatheus++;
    } else if(passeMatheus == "excelente") {
        passeExcelenteMatheus++;
    }

    //Verificador chute
    if(chuteMatheus == "baixo") {
        chuteBaixoMatheus++;
    } else if(chuteMatheus == "medio") {
        chuteMedioMatheus++;
    } else if(chuteMatheus == "bom") {
        chuteBomMatheus++;
    } else if(chuteMatheus == "excelente") {
        chuteExcelenteMatheus++;
    }

    //Verificador equilibrio
    if(equilibrioMatheus == "baixo") {
        equilibrioBaixoMatheus++;
    } else if(equilibrioMatheus == "medio") {
        equilibrioMedioMatheus++;
    } else if(passeMatheus == "bom") {
        equilibrioBomMatheus++;
    } else if(equilibrioMatheus == "excelente") {
        equilibrioExcelenteMatheus++;
    }

    //Verificador agilidade
    if(agilidadeMatheus == "baixo") {
        agilidadeBaixoMatheus++;
    } else if(agilidadeMatheus == "medio") {
        agilidadeMedioMatheus++;
    } else if(agilidadeMatheus == "bom") {
        agilidadeBomMatheus++;
    } else if(agilidadeMatheus == "excelente") {
        agilidadeExcelenteMatheus++;
    }

    //Verificador marcacao
    if(marcacaoMatheus == "baixo") {
        marcacaoBaixoMatheus++;
    } else if(marcacaoMatheus == "medio") {
        marcacaoMedioMatheus++;
    } else if(marcacaoMatheus == "bom") {
        marcacaoBomMatheus++;
    } else if(marcacaoMatheus == "excelente") {
        marcacaoExcelenteMatheus++;
    }

    //Verificador ataque
    if(ataqueMatheus == "baixo") {
        ataqueBaixoMatheus++;
    } else if(ataqueMatheus == "medio") {
        ataqueMedioMatheus++;
    } else if(ataqueMatheus == "bom") {
        ataqueBomMatheus++;
    } else if(ataqueMatheus == "excelente") {
        ataqueExcelenteMatheus++;
    }

    //Verificador coletividade
    if(coletividadeMatheus == "baixo") {
        coletividadeBaixoMatheus++;
    } else if(coletividadeMatheus == "medio") {
        coletividadeMedioMatheus++;
    } else if(coletividadeMatheus == "bom") {
        coletividadeBomMatheus++;
    } else if(coletividadeMatheus == "excelente") {
        coletividadeExcelenteMatheus++;
    }

    //Cálculo das médias
    let mediaBaixoMatheus = passeBaixoMatheus + chuteBaixoMatheus + equilibrioBaixoMatheus + agilidadeBaixoMatheus + marcacaoBaixoMatheus + ataqueBaixoMatheus + coletividadeBaixoMatheus;
    let mediaMedioMatheus = passeMedioMatheus + chuteMedioMatheus + equilibrioMedioMatheus + agilidadeMedioMatheus + marcacaoMedioMatheus + ataqueMedioMatheus + coletividadeMedioMatheus;
    let mediaBomMatheus = passeBomMatheus + chuteBomMatheus + equilibrioBomMatheus + agilidadeBomMatheus + marcacaoBomMatheus + ataqueBomMatheus + coletividadeBomMatheus;
    let mediaExcelenteMatheus = passeExcelenteMatheus + chuteExcelenteMatheus + equilibrioExcelenteMatheus + agilidadeExcelenteMatheus + marcacaoExcelenteMatheus + ataqueExcelenteMatheus + coletividadeExcelenteMatheus; 

    let mediaMatheus;

    if(mediaBaixoMatheus>mediaMedioMatheus && mediaBaixoMatheus>mediaBomMatheus && mediaBaixoMatheus>mediaExcelenteMatheus) {
        resultadoMatheus.style.display = 'block';
        resMatheus.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaMatheus = 1;
    } else if(mediaMedioMatheus>mediaBaixoMatheus && mediaMedioMatheus>mediaBomMatheus && mediaMedioMatheus>mediaExcelenteMatheus) {
        resultadoMatheus.style.display = 'block';
        resMatheus.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaMatheus = 2;
    } else if(mediaBomMatheus>mediaBaixoMatheus && mediaBomMatheus>mediaMedioMatheus && mediaBomMatheus>mediaExcelenteMatheus) {
        resultadoMatheus.style.display = 'block';
        resMatheus.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaMatheus = 3;
    } else if(mediaExcelenteMatheus>mediaBaixoMatheus && mediaExcelenteMatheus>mediaMedioMatheus && mediaExcelenteMatheus>mediaBomMatheus) {
        resultadoMatheus.style.display = 'block';
        resMatheus.innerHTML = "O Atleta está com a média geral Excelente, deve continuar se dedicando para manter esse ritmo!";
        mediaMatheus = 4;
    } else if(mediaBaixoMatheus == mediaMedioMatheus){
        resultadoMatheus.style.display = 'block';
        resMatheus.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaMatheus = 1;
    } else if(mediaBaixoMatheus==mediaBomMatheus){
        resultadoMatheus.style.display = 'block';
        resMatheus.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaMatheus = 2;
    } else if(mediaMedioMatheus==mediaBomMatheus){
        resultadoMatheus.style.display = 'block';
        resMatheus.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaMatheus = 2;
    } else if(mediaBaixoMatheus==mediaExcelenteMatheus){
        resultadoMatheus.style.display = 'block';
        resMatheus.innerHTML = "O Atleta está com a média geral Média, precisa melhorar o desempenho!";
        mediaMatheus = 2;
    } else if(mediaMedioMatheus==mediaExcelenteMatheus){
        resultadoMatheus.style.display = 'block';
        resMatheus.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaMatheus = 3;
    } else if(mediaBomMatheus==mediaExcelenteMatheus){
        resultadoMatheus.style.display = 'block';
        resMatheus.innerHTML = "O Atleta está com a média geral muito boa, precisa melhorar um pouco mais o desempenho!";
        mediaMatheus = 4;
    }
    //Fim área do Matheus

    //Área Atleta Nykolas
    let resultadoNykolas = document.getElementById("resultadoNykolas");
    let resNykolas = document.getElementById("resNykolas");

    let passeNykolas = document.querySelector('input[name="radio_passe2"]:checked').value;
    let chuteNykolas = document.querySelector('input[name="radio_chute2"]:checked').value;
    let equilibrioNykolas = document.querySelector('input[name="radio_equilibrio2"]:checked').value;
    let agilidadeNykolas = document.querySelector('input[name="radio_agil2"]:checked').value;
    let marcacaoNykolas = document.querySelector('input[name="radio_marc2"]:checked').value;
    let ataqueNykolas = document.querySelector('input[name="radio_ataq2"]:checked').value;
    let coletividadeNykolas = document.querySelector('input[name="radio_coletivo2"]:checked').value;

    let passeBaixoNykolas = 0;
    let passeMedioNykolas = 0;
    let passeBomNykolas = 0;
    let passeExcelenteNykolas = 0;

    let chuteBaixoNykolas = 0;
    let chuteMedioNykolas = 0;
    let chuteBomNykolas = 0;
    let chuteExcelenteNykolas = 0;

    let equilibrioBaixoNykolas = 0;
    let equilibrioMedioNykolas = 0;
    let equilibrioBomNykolas = 0;
    let equilibrioExcelenteNykolas = 0;

    let agilidadeBaixoNykolas = 0;
    let agilidadeMedioNykolas = 0;
    let agilidadeBomNykolas = 0;
    let agilidadeExcelenteNykolas = 0;

    let marcacaoBaixoNykolas = 0;
    let marcacaoMedioNykolas = 0;
    let marcacaoBomNykolas = 0;
    let marcacaoExcelenteNykolas = 0;

    let ataqueBaixoNykolas = 0;
    let ataqueMedioNykolas = 0;
    let ataqueBomNykolas = 0;
    let ataqueExcelenteNykolas = 0;

    let coletividadeBaixoNykolas = 0;
    let coletividadeMedioNykolas = 0;
    let coletividadeBomNykolas = 0;
    let coletividadeExcelenteNykolas = 0;

    //Verificador passe
    if(passeNykolas == "baixo") {
        passeBaixoNykolas++;
    } else if(passeNykolas == "medio") {
        passeMedioNykolas++;
    } else if(passeNykolas == "bom") {
        passeBomNykolas++;
    } else if(passeNykolas == "excelente") {
        passeExcelenteNykolas++;
    }

    //Verificador chute
    if(chuteNykolas == "baixo") {
        chuteBaixoNykolas++;
    } else if(chuteNykolas == "medio") {
        chuteMedioNykolas++;
    } else if(chuteNykolas == "bom") {
        chuteBomNykolas++;
    } else if(chuteNykolas == "excelente") {
        chuteExcelenteNykolas++;
    }

    //Verificador equilibrio
    if(equilibrioNykolas == "baixo") {
        equilibrioBaixoNykolas++;
    } else if(equilibrioNykolas == "medio") {
        equilibrioMedioNykolas++;
    } else if(passeNykolas == "bom") {
        equilibrioBomNykolas++;
    } else if(equilibrioNykolas == "excelente") {
        equilibrioExcelenteNykolas++;
    }

    //Verificador agilidade
    if(agilidadeNykolas == "baixo") {
        agilidadeBaixoNykolas++;
    } else if(agilidadeNykolas == "medio") {
        agilidadeMedioNykolas++;
    } else if(agilidadeNykolas == "bom") {
        agilidadeBomNykolas++;
    } else if(agilidadeNykolas == "excelente") {
        agilidadeExcelenteNykolas++;
    }

    //Verificador marcacao
    if(marcacaoNykolas == "baixo") {
        marcacaoBaixoNykolas++;
    } else if(marcacaoNykolas == "medio") {
        marcacaoMedioNykolas++;
    } else if(marcacaoNykolas == "bom") {
        marcacaoBomNykolas++;
    } else if(marcacaoNykolas == "excelente") {
        marcacaoExcelenteNykolas++;
    }

    //Verificador ataque
    if(ataqueNykolas == "baixo") {
        ataqueBaixoNykolas++;
    } else if(ataqueNykolas == "medio") {
        ataqueMedioNykolas++;
    } else if(ataqueNykolas == "bom") {
        ataqueBomNykolas++;
    } else if(ataqueNykolas == "excelente") {
        ataqueExcelenteNykolas++;
    }

    //Verificador coletividade
    if(coletividadeNykolas == "baixo") {
        coletividadeBaixoNykolas++;
    } else if(coletividadeNykolas == "medio") {
        coletividadeMedioNykolas++;
    } else if(coletividadeNykolas == "bom") {
        coletividadeBomNykolas++;
    } else if(coletividadeNykolas == "excelente") {
        coletividadeExcelenteNykolas++;
    }

    //Cálculo das médias
    let mediaBaixoNykolas = passeBaixoNykolas + chuteBaixoNykolas + equilibrioBaixoNykolas + agilidadeBaixoNykolas + marcacaoBaixoNykolas + ataqueBaixoNykolas + coletividadeBaixoNykolas;
    let mediaMedioNykolas = passeMedioNykolas + chuteMedioNykolas + equilibrioMedioNykolas + agilidadeMedioNykolas + marcacaoMedioNykolas + ataqueMedioNykolas + coletividadeMedioNykolas;
    let mediaBomNykolas = passeBomNykolas + chuteBomNykolas + equilibrioBomNykolas + agilidadeBomNykolas + marcacaoBomNykolas + ataqueBomNykolas + coletividadeBomNykolas;
    let mediaExcelenteNykolas = passeExcelenteNykolas + chuteExcelenteNykolas + equilibrioExcelenteNykolas + agilidadeExcelenteNykolas + marcacaoExcelenteNykolas + ataqueExcelenteNykolas + coletividadeExcelenteNykolas; 

    let mediaNykolas;

    if(mediaBaixoNykolas>mediaMedioNykolas && mediaBaixoNykolas>mediaBomNykolas && mediaBaixoNykolas>mediaExcelenteNykolas) {
        resultadoNykolas.style.display = 'block';
        resNykolas.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaNykolas = 1;
    } else if(mediaMedioNykolas>mediaBaixoNykolas && mediaMedioNykolas>mediaBomNykolas && mediaMedioNykolas>mediaExcelenteNykolas) {
        resultadoNykolas.style.display = 'block';
        resNykolas.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaNykolas = 2;
    } else if(mediaBomNykolas>mediaBaixoNykolas && mediaBomNykolas>mediaMedioNykolas && mediaBomNykolas>mediaExcelenteNykolas) {
        resultadoNykolas.style.display = 'block';
        resNykolas.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaNykolas = 3;
    } else if(mediaExcelenteNykolas>mediaBaixoNykolas && mediaExcelenteNykolas>mediaMedioNykolas && mediaExcelenteNykolas>mediaBomNykolas) {
        resultadoNykolas.style.display = 'block';
        resNykolas.innerHTML = "O Atleta está com a média geral Excelente, deve continuar se dedicando para manter esse ritmo!";
        mediaNykolas = 4;
    } else if(mediaBaixoNykolas == mediaMedioNykolas){
        resultadoNykolas.style.display = 'block';
        resNykolas.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaNykolas = 1;
    } else if(mediaBaixoNykolas==mediaBomNykolas){
        resultadoNykolas.style.display = 'block';
        resNykolas.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaNykolas = 2;
    } else if(mediaMedioNykolas==mediaBomNykolas){
        resultadoNykolas.style.display = 'block';
        resNykolas.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaNykolas = 2;
    } else if(mediaBaixoNykolas==mediaExcelenteNykolas){
        resultadoNykolas.style.display = 'block';
        resNykolas.innerHTML = "O Atleta está com a média geral Média, precisa melhorar o desempenho!";
        mediaNykolas = 2;
    } else if(mediaMedioNykolas==mediaExcelenteNykolas){
        resultadoNykolas.style.display = 'block';
        resNykolas.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaNykolas = 3;
    } else if(mediaBomNykolas==mediaExcelenteNykolas){
        resultadoNykolas.style.display = 'block';
        resNykolas.innerHTML = "O Atleta está com a média geral muito boa, precisa melhorar um pouco mais o desempenho!";
        mediaNykolas = 4;
    }
    //Fim área do Nykolas

    //Área Atleta Yann
    let resultadoYann = document.getElementById("resultadoYann");
    let resYann = document.getElementById("resYann");

    let passeYann = document.querySelector('input[name="radio_passe3"]:checked').value;
    let chuteYann = document.querySelector('input[name="radio_chute3"]:checked').value;
    let equilibrioYann = document.querySelector('input[name="radio_equilibrio3"]:checked').value;
    let agilidadeYann = document.querySelector('input[name="radio_agil3"]:checked').value;
    let marcacaoYann = document.querySelector('input[name="radio_marc3"]:checked').value;
    let ataqueYann = document.querySelector('input[name="radio_ataq3"]:checked').value;
    let coletividadeYann = document.querySelector('input[name="radio_coletivo3"]:checked').value;

    let passeBaixoYann = 0;
    let passeMedioYann = 0;
    let passeBomYann = 0;
    let passeExcelenteYann = 0;

    let chuteBaixoYann = 0;
    let chuteMedioYann = 0;
    let chuteBomYann = 0;
    let chuteExcelenteYann = 0;

    let equilibrioBaixoYann = 0;
    let equilibrioMedioYann = 0;
    let equilibrioBomYann = 0;
    let equilibrioExcelenteYann = 0;

    let agilidadeBaixoYann = 0;
    let agilidadeMedioYann = 0;
    let agilidadeBomYann = 0;
    let agilidadeExcelenteYann = 0;

    let marcacaoBaixoYann = 0;
    let marcacaoMedioYann = 0;
    let marcacaoBomYann = 0;
    let marcacaoExcelenteYann = 0;

    let ataqueBaixoYann = 0;
    let ataqueMedioYann = 0;
    let ataqueBomYann = 0;
    let ataqueExcelenteYann = 0;

    let coletividadeBaixoYann = 0;
    let coletividadeMedioYann = 0;
    let coletividadeBomYann = 0;
    let coletividadeExcelenteYann = 0;

    //Verificador passe
    if(passeYann == "baixo") {
        passeBaixoYann++;
    } else if(passeYann == "medio") {
        passeMedioYann++;
    } else if(passeYann == "bom") {
        passeBomYann++;
    } else if(passeYann == "excelente") {
        passeExcelenteYann++;
    }

    //Verificador chute
    if(chuteYann == "baixo") {
        chuteBaixoYann++;
    } else if(chuteYann == "medio") {
        chuteMedioYann++;
    } else if(chuteYann == "bom") {
        chuteBomYann++;
    } else if(chuteYann == "excelente") {
        chuteExcelenteYann++;
    }

    //Verificador equilibrio
    if(equilibrioYann == "baixo") {
        equilibrioBaixoYann++;
    } else if(equilibrioYann == "medio") {
        equilibrioMedioYann++;
    } else if(passeYann == "bom") {
        equilibrioBomYann++;
    } else if(equilibrioYann == "excelente") {
        equilibrioExcelenteYann++;
    }

    //Verificador agilidade
    if(agilidadeYann == "baixo") {
        agilidadeBaixoYann++;
    } else if(agilidadeYann == "medio") {
        agilidadeMedioYann++;
    } else if(agilidadeYann == "bom") {
        agilidadeBomYann++;
    } else if(agilidadeYann == "excelente") {
        agilidadeExcelenteYann++;
    }

    //Verificador marcacao
    if(marcacaoYann == "baixo") {
        marcacaoBaixoYann++;
    } else if(marcacaoYann == "medio") {
        marcacaoMedioYann++;
    } else if(marcacaoYann == "bom") {
        marcacaoBomYann++;
    } else if(marcacaoYann == "excelente") {
        marcacaoExcelenteYann++;
    }

    //Verificador ataque
    if(ataqueYann == "baixo") {
        ataqueBaixoYann++;
    } else if(ataqueYann == "medio") {
        ataqueMedioYann++;
    } else if(ataqueYann == "bom") {
        ataqueBomYann++;
    } else if(ataqueYann == "excelente") {
        ataqueExcelenteYann++;
    }

    //Verificador coletividade
    if(coletividadeYann == "baixo") {
        coletividadeBaixoYann++;
    } else if(coletividadeYann == "medio") {
        coletividadeMedioYann++;
    } else if(coletividadeYann == "bom") {
        coletividadeBomYann++;
    } else if(coletividadeYann == "excelente") {
        coletividadeExcelenteYann++;
    }

    //Cálculo das médias
    let mediaBaixoYann = passeBaixoYann + chuteBaixoYann + equilibrioBaixoYann + agilidadeBaixoYann + marcacaoBaixoYann + ataqueBaixoYann + coletividadeBaixoYann;
    let mediaMedioYann = passeMedioYann + chuteMedioYann + equilibrioMedioYann + agilidadeMedioYann + marcacaoMedioYann + ataqueMedioYann + coletividadeMedioYann;
    let mediaBomYann = passeBomYann + chuteBomYann + equilibrioBomYann + agilidadeBomYann + marcacaoBomYann + ataqueBomYann + coletividadeBomYann;
    let mediaExcelenteYann = passeExcelenteYann + chuteExcelenteYann + equilibrioExcelenteYann + agilidadeExcelenteYann + marcacaoExcelenteYann + ataqueExcelenteYann + coletividadeExcelenteYann; 

    let mediaYann;

    if(mediaBaixoYann>mediaMedioYann && mediaBaixoYann>mediaBomYann && mediaBaixoYann>mediaExcelenteYann) {
        resultadoYann.style.display = 'block';
        resYann.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaYann = 1;
    } else if(mediaMedioYann>mediaBaixoYann && mediaMedioYann>mediaBomYann && mediaMedioYann>mediaExcelenteYann) {
        resultadoYann.style.display = 'block';
        resYann.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaYann = 2;
    } else if(mediaBomYann>mediaBaixoYann && mediaBomYann>mediaMedioYann && mediaBomYann>mediaExcelenteYann) {
        resultadoYann.style.display = 'block';
        resYann.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaYann = 3;
    } else if(mediaExcelenteYann>mediaBaixoYann && mediaExcelenteYann>mediaMedioYann && mediaExcelenteYann>mediaBomYann) {
        resultadoYann.style.display = 'block';
        resYann.innerHTML = "O Atleta está com a média geral Excelente, deve continuar se dedicando para manter esse ritmo!";
        mediaYann = 4;
    } else if(mediaBaixoYann == mediaMedioYann){
        resultadoYann.style.display = 'block';
        resYann.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaYann = 1;
    } else if(mediaBaixoYann==mediaBomYann){
        resultadoYann.style.display = 'block';
        resYann.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaYann = 2;
    } else if(mediaMedioYann==mediaBomYann){
        resultadoYann.style.display = 'block';
        resYann.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaYann = 2;
    } else if(mediaBaixoYann==mediaExcelenteYann){
        resultadoYann.style.display = 'block';
        resYann.innerHTML = "O Atleta está com a média geral Média, precisa melhorar o desempenho!";
        mediaYann = 2;
    } else if(mediaMedioYann==mediaExcelenteYann){
        resultadoYann.style.display = 'block';
        resYann.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaYann = 3;
    } else if(mediaBomYann==mediaExcelenteYann){
        resultadoYann.style.display = 'block';
        resYann.innerHTML = "O Atleta está com a média geral muito boa, precisa melhorar um pouco mais o desempenho!";
        mediaYann = 4;
    }
    //Fim área do Yann

    //Área Atleta Vicente
    let resultadoVicente = document.getElementById("resultadoVicente");
    let resVicente = document.getElementById("resVicente");

    let passeVicente = document.querySelector('input[name="radio_passe4"]:checked').value;
    let chuteVicente = document.querySelector('input[name="radio_chute4"]:checked').value;
    let equilibrioVicente = document.querySelector('input[name="radio_equilibrio4"]:checked').value;
    let agilidadeVicente = document.querySelector('input[name="radio_agil4"]:checked').value;
    let marcacaoVicente = document.querySelector('input[name="radio_marc4"]:checked').value;
    let ataqueVicente = document.querySelector('input[name="radio_ataq4"]:checked').value;
    let coletividadeVicente = document.querySelector('input[name="radio_coletivo4"]:checked').value;

    let passeBaixoVicente = 0;
    let passeMedioVicente = 0;
    let passeBomVicente = 0;
    let passeExcelenteVicente = 0;

    let chuteBaixoVicente = 0;
    let chuteMedioVicente = 0;
    let chuteBomVicente = 0;
    let chuteExcelenteVicente = 0;

    let equilibrioBaixoVicente = 0;
    let equilibrioMedioVicente = 0;
    let equilibrioBomVicente = 0;
    let equilibrioExcelenteVicente = 0;

    let agilidadeBaixoVicente = 0;
    let agilidadeMedioVicente = 0;
    let agilidadeBomVicente = 0;
    let agilidadeExcelenteVicente = 0;

    let marcacaoBaixoVicente = 0;
    let marcacaoMedioVicente = 0;
    let marcacaoBomVicente = 0;
    let marcacaoExcelenteVicente = 0;

    let ataqueBaixoVicente = 0;
    let ataqueMedioVicente = 0;
    let ataqueBomVicente = 0;
    let ataqueExcelenteVicente = 0;

    let coletividadeBaixoVicente = 0;
    let coletividadeMedioVicente = 0;
    let coletividadeBomVicente = 0;
    let coletividadeExcelenteVicente = 0;

    //Verificador passe
    if(passeVicente == "baixo") {
        passeBaixoVicente++;
    } else if(passeVicente == "medio") {
        passeMedioVicente++;
    } else if(passeVicente == "bom") {
        passeBomVicente++;
    } else if(passeVicente == "excelente") {
        passeExcelenteVicente++;
    }

    //Verificador chute
    if(chuteVicente == "baixo") {
        chuteBaixoVicente++;
    } else if(chuteVicente == "medio") {
        chuteMedioVicente++;
    } else if(chuteVicente == "bom") {
        chuteBomVicente++;
    } else if(chuteVicente == "excelente") {
        chuteExcelenteVicente++;
    }

    //Verificador equilibrio
    if(equilibrioVicente == "baixo") {
        equilibrioBaixoVicente++;
    } else if(equilibrioVicente == "medio") {
        equilibrioMedioVicente++;
    } else if(passeVicente == "bom") {
        equilibrioBomVicente++;
    } else if(equilibrioVicente == "excelente") {
        equilibrioExcelenteVicente++;
    }

    //Verificador agilidade
    if(agilidadeVicente == "baixo") {
        agilidadeBaixoVicente++;
    } else if(agilidadeVicente == "medio") {
        agilidadeMedioVicente++;
    } else if(agilidadeVicente == "bom") {
        agilidadeBomVicente++;
    } else if(agilidadeVicente == "excelente") {
        agilidadeExcelenteVicente++;
    }

    //Verificador marcacao
    if(marcacaoVicente == "baixo") {
        marcacaoBaixoVicente++;
    } else if(marcacaoVicente == "medio") {
        marcacaoMedioVicente++;
    } else if(marcacaoVicente == "bom") {
        marcacaoBomVicente++;
    } else if(marcacaoVicente == "excelente") {
        marcacaoExcelenteVicente++;
    }

    //Verificador ataque
    if(ataqueVicente == "baixo") {
        ataqueBaixoVicente++;
    } else if(ataqueVicente == "medio") {
        ataqueMedioVicente++;
    } else if(ataqueVicente == "bom") {
        ataqueBomVicente++;
    } else if(ataqueVicente == "excelente") {
        ataqueExcelenteVicente++;
    }

    //Verificador coletividade
    if(coletividadeVicente == "baixo") {
        coletividadeBaixoVicente++;
    } else if(coletividadeVicente == "medio") {
        coletividadeMedioVicente++;
    } else if(coletividadeVicente == "bom") {
        coletividadeBomVicente++;
    } else if(coletividadeVicente == "excelente") {
        coletividadeExcelenteVicente++;
    }

    //Cálculo das médias
    let mediaBaixoVicente = passeBaixoVicente + chuteBaixoVicente + equilibrioBaixoVicente + agilidadeBaixoVicente + marcacaoBaixoVicente + ataqueBaixoVicente + coletividadeBaixoVicente;
    let mediaMedioVicente = passeMedioVicente + chuteMedioVicente + equilibrioMedioVicente + agilidadeMedioVicente + marcacaoMedioVicente + ataqueMedioVicente + coletividadeMedioVicente;
    let mediaBomVicente = passeBomVicente + chuteBomVicente + equilibrioBomVicente + agilidadeBomVicente + marcacaoBomVicente + ataqueBomVicente + coletividadeBomVicente;
    let mediaExcelenteVicente = passeExcelenteVicente + chuteExcelenteVicente + equilibrioExcelenteVicente + agilidadeExcelenteVicente + marcacaoExcelenteVicente + ataqueExcelenteVicente + coletividadeExcelenteVicente; 

    let mediaVicente;

    if(mediaBaixoVicente>mediaMedioVicente && mediaBaixoVicente>mediaBomVicente && mediaBaixoVicente>mediaExcelenteVicente) {
        resultadoVicente.style.display = 'block';
        resVicente.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaVicente = 1;
    } else if(mediaMedioVicente>mediaBaixoVicente && mediaMedioVicente>mediaBomVicente && mediaMedioVicente>mediaExcelenteVicente) {
        resultadoVicente.style.display = 'block';
        resVicente.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaVicente = 2;
    } else if(mediaBomVicente>mediaBaixoVicente && mediaBomVicente>mediaMedioVicente && mediaBomVicente>mediaExcelenteVicente) {
        resultadoVicente.style.display = 'block';
        resVicente.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaVicente = 3;
    } else if(mediaExcelenteVicente>mediaBaixoVicente && mediaExcelenteVicente>mediaMedioVicente && mediaExcelenteVicente>mediaBomVicente) {
        resultadoVicente.style.display = 'block';
        resVicente.innerHTML = "O Atleta está com a média geral Excelente, deve continuar se dedicando para manter esse ritmo!";
        mediaVicente = 4;
    } else if(mediaBaixoVicente == mediaMedioVicente){
        resultadoVicente.style.display = 'block';
        resVicente.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaVicente = 1;
    } else if(mediaBaixoVicente==mediaBomVicente){
        resultadoVicente.style.display = 'block';
        resVicente.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaVicente = 2;
    } else if(mediaMedioVicente==mediaBomVicente){
        resultadoVicente.style.display = 'block';
        resVicente.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaVicente = 2;
    } else if(mediaBaixoVicente==mediaExcelenteVicente){
        resultadoVicente.style.display = 'block';
        resVicente.innerHTML = "O Atleta está com a média geral Média, precisa melhorar o desempenho!";
        mediaVicente = 2;
    } else if(mediaMedioVicente==mediaExcelenteVicente){
        resultadoVicente.style.display = 'block';
        resVicente.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaVicente = 3;
    } else if(mediaBomVicente==mediaExcelenteVicente){
        resultadoVicente.style.display = 'block';
        resVicente.innerHTML = "O Atleta está com a média geral muito boa, precisa melhorar um pouco mais o desempenho!";
        mediaVicente = 4;
    }
    //Fim área do Vicente

    //Área Atleta Gabriel
    let resultadoGabriel = document.getElementById("resultadoGabriel");
    let resGabriel = document.getElementById("resGabriel");

    let passeGabriel = document.querySelector('input[name="radio_passe5"]:checked').value;
    let chuteGabriel = document.querySelector('input[name="radio_chute5"]:checked').value;
    let equilibrioGabriel = document.querySelector('input[name="radio_equilibrio5"]:checked').value;
    let agilidadeGabriel = document.querySelector('input[name="radio_agil5"]:checked').value;
    let marcacaoGabriel = document.querySelector('input[name="radio_marc5"]:checked').value;
    let ataqueGabriel = document.querySelector('input[name="radio_ataq5"]:checked').value;
    let coletividadeGabriel = document.querySelector('input[name="radio_coletivo5"]:checked').value;

    let passeBaixoGabriel = 0;
    let passeMedioGabriel = 0;
    let passeBomGabriel = 0;
    let passeExcelenteGabriel = 0;

    let chuteBaixoGabriel = 0;
    let chuteMedioGabriel = 0;
    let chuteBomGabriel = 0;
    let chuteExcelenteGabriel = 0;

    let equilibrioBaixoGabriel = 0;
    let equilibrioMedioGabriel = 0;
    let equilibrioBomGabriel = 0;
    let equilibrioExcelenteGabriel = 0;

    let agilidadeBaixoGabriel = 0;
    let agilidadeMedioGabriel = 0;
    let agilidadeBomGabriel = 0;
    let agilidadeExcelenteGabriel = 0;

    let marcacaoBaixoGabriel = 0;
    let marcacaoMedioGabriel = 0;
    let marcacaoBomGabriel = 0;
    let marcacaoExcelenteGabriel = 0;

    let ataqueBaixoGabriel = 0;
    let ataqueMedioGabriel = 0;
    let ataqueBomGabriel = 0;
    let ataqueExcelenteGabriel = 0;

    let coletividadeBaixoGabriel = 0;
    let coletividadeMedioGabriel = 0;
    let coletividadeBomGabriel = 0;
    let coletividadeExcelenteGabriel = 0;

    //Verificador passe
    if(passeGabriel == "baixo") {
        passeBaixoGabriel++;
    } else if(passeGabriel == "medio") {
        passeMedioGabriel++;
    } else if(passeGabriel == "bom") {
        passeBomGabriel++;
    } else if(passeGabriel == "excelente") {
        passeExcelenteGabriel++;
    }

    //Verificador chute
    if(chuteGabriel == "baixo") {
        chuteBaixoGabriel++;
    } else if(chuteGabriel == "medio") {
        chuteMedioGabriel++;
    } else if(chuteGabriel == "bom") {
        chuteBomGabriel++;
    } else if(chuteGabriel == "excelente") {
        chuteExcelenteGabriel++;
    }

    //Verificador equilibrio
    if(equilibrioGabriel == "baixo") {
        equilibrioBaixoGabriel++;
    } else if(equilibrioGabriel == "medio") {
        equilibrioMedioGabriel++;
    } else if(passeGabriel == "bom") {
        equilibrioBomGabriel++;
    } else if(equilibrioGabriel == "excelente") {
        equilibrioExcelenteGabriel++;
    }

    //Verificador agilidade
    if(agilidadeGabriel == "baixo") {
        agilidadeBaixoGabriel++;
    } else if(agilidadeGabriel == "medio") {
        agilidadeMedioGabriel++;
    } else if(agilidadeGabriel == "bom") {
        agilidadeBomGabriel++;
    } else if(agilidadeGabriel == "excelente") {
        agilidadeExcelenteGabriel++;
    }

    //Verificador marcacao
    if(marcacaoGabriel == "baixo") {
        marcacaoBaixoGabriel++;
    } else if(marcacaoGabriel == "medio") {
        marcacaoMedioGabriel++;
    } else if(marcacaoGabriel == "bom") {
        marcacaoBomGabriel++;
    } else if(marcacaoGabriel == "excelente") {
        marcacaoExcelenteGabriel++;
    }

    //Verificador ataque
    if(ataqueGabriel == "baixo") {
        ataqueBaixoGabriel++;
    } else if(ataqueGabriel == "medio") {
        ataqueMedioGabriel++;
    } else if(ataqueGabriel == "bom") {
        ataqueBomGabriel++;
    } else if(ataqueGabriel == "excelente") {
        ataqueExcelenteGabriel++;
    }

    //Verificador coletividade
    if(coletividadeGabriel == "baixo") {
        coletividadeBaixoGabriel++;
    } else if(coletividadeGabriel == "medio") {
        coletividadeMedioGabriel++;
    } else if(coletividadeGabriel == "bom") {
        coletividadeBomGabriel++;
    } else if(coletividadeGabriel == "excelente") {
        coletividadeExcelenteGabriel++;
    }

    //Cálculo das médias
    let mediaBaixoGabriel = passeBaixoGabriel + chuteBaixoGabriel + equilibrioBaixoGabriel + agilidadeBaixoGabriel + marcacaoBaixoGabriel + ataqueBaixoGabriel + coletividadeBaixoGabriel;
    let mediaMedioGabriel = passeMedioGabriel + chuteMedioGabriel + equilibrioMedioGabriel + agilidadeMedioGabriel + marcacaoMedioGabriel + ataqueMedioGabriel + coletividadeMedioGabriel;
    let mediaBomGabriel = passeBomGabriel + chuteBomGabriel + equilibrioBomGabriel + agilidadeBomGabriel + marcacaoBomGabriel + ataqueBomGabriel + coletividadeBomGabriel;
    let mediaExcelenteGabriel = passeExcelenteGabriel + chuteExcelenteGabriel + equilibrioExcelenteGabriel + agilidadeExcelenteGabriel + marcacaoExcelenteGabriel + ataqueExcelenteGabriel + coletividadeExcelenteGabriel; 

    let mediaGabriel;

    if(mediaBaixoGabriel>mediaMedioGabriel && mediaBaixoGabriel>mediaBomGabriel && mediaBaixoGabriel>mediaExcelenteGabriel) {
        resultadoGabriel.style.display = 'block';
        resGabriel.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaGabriel = 1;
    } else if(mediaMedioGabriel>mediaBaixoGabriel && mediaMedioGabriel>mediaBomGabriel && mediaMedioGabriel>mediaExcelenteGabriel) {
        resultadoGabriel.style.display = 'block';
        resGabriel.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaGabriel = 2;
    } else if(mediaBomGabriel>mediaBaixoGabriel && mediaBomGabriel>mediaMedioGabriel && mediaBomGabriel>mediaExcelenteGabriel) {
        resultadoGabriel.style.display = 'block';
        resGabriel.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaGabriel = 3;
    } else if(mediaExcelenteGabriel>mediaBaixoGabriel && mediaExcelenteGabriel>mediaMedioGabriel && mediaExcelenteGabriel>mediaBomGabriel) {
        resultadoGabriel.style.display = 'block';
        resGabriel.innerHTML = "O Atleta está com a média geral Excelente, deve continuar se dedicando para manter esse ritmo!";
        mediaGabriel = 4;
    } else if(mediaBaixoGabriel == mediaMedioGabriel){
        resultadoGabriel.style.display = 'block';
        resGabriel.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaGabriel = 1;
    } else if(mediaBaixoGabriel==mediaBomGabriel){
        resultadoGabriel.style.display = 'block';
        resGabriel.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaGabriel = 2;
    } else if(mediaMedioGabriel==mediaBomGabriel){
        resultadoGabriel.style.display = 'block';
        resGabriel.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaGabriel = 2;
    } else if(mediaBaixoGabriel==mediaExcelenteGabriel){
        resultadoGabriel.style.display = 'block';
        resGabriel.innerHTML = "O Atleta está com a média geral Média, precisa melhorar o desempenho!";
        mediaGabriel = 2;
    } else if(mediaMedioGabriel==mediaExcelenteGabriel){
        resultadoGabriel.style.display = 'block';
        resGabriel.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaGabriel = 3;
    } else if(mediaBomGabriel==mediaExcelenteGabriel){
        resultadoGabriel.style.display = 'block';
        resGabriel.innerHTML = "O Atleta está com a média geral muito boa, precisa melhorar um pouco mais o desempenho!";
        mediaGabriel = 4;
    }
    //Fim área do Gabriel

    //Área Atleta CarlosEduardo
    let resultadoCarlosEduardo = document.getElementById("resultadoCarlosEduardo");
    let resCarlosEduardo = document.getElementById("resCarlosEduardo");

    let passeCarlosEduardo = document.querySelector('input[name="radio_passe6"]:checked').value;
    let chuteCarlosEduardo = document.querySelector('input[name="radio_chute6"]:checked').value;
    let equilibrioCarlosEduardo = document.querySelector('input[name="radio_equilibrio6"]:checked').value;
    let agilidadeCarlosEduardo = document.querySelector('input[name="radio_agil6"]:checked').value;
    let marcacaoCarlosEduardo = document.querySelector('input[name="radio_marc6"]:checked').value;
    let ataqueCarlosEduardo = document.querySelector('input[name="radio_ataq6"]:checked').value;
    let coletividadeCarlosEduardo = document.querySelector('input[name="radio_coletivo6"]:checked').value;

    let passeBaixoCarlosEduardo = 0;
    let passeMedioCarlosEduardo = 0;
    let passeBomCarlosEduardo = 0;
    let passeExcelenteCarlosEduardo = 0;

    let chuteBaixoCarlosEduardo = 0;
    let chuteMedioCarlosEduardo = 0;
    let chuteBomCarlosEduardo = 0;
    let chuteExcelenteCarlosEduardo = 0;

    let equilibrioBaixoCarlosEduardo = 0;
    let equilibrioMedioCarlosEduardo = 0;
    let equilibrioBomCarlosEduardo = 0;
    let equilibrioExcelenteCarlosEduardo = 0;

    let agilidadeBaixoCarlosEduardo = 0;
    let agilidadeMedioCarlosEduardo = 0;
    let agilidadeBomCarlosEduardo = 0;
    let agilidadeExcelenteCarlosEduardo = 0;

    let marcacaoBaixoCarlosEduardo = 0;
    let marcacaoMedioCarlosEduardo = 0;
    let marcacaoBomCarlosEduardo = 0;
    let marcacaoExcelenteCarlosEduardo = 0;

    let ataqueBaixoCarlosEduardo = 0;
    let ataqueMedioCarlosEduardo = 0;
    let ataqueBomCarlosEduardo = 0;
    let ataqueExcelenteCarlosEduardo = 0;

    let coletividadeBaixoCarlosEduardo = 0;
    let coletividadeMedioCarlosEduardo = 0;
    let coletividadeBomCarlosEduardo = 0;
    let coletividadeExcelenteCarlosEduardo = 0;

    //Verificador passe
    if(passeCarlosEduardo == "baixo") {
        passeBaixoCarlosEduardo++;
    } else if(passeCarlosEduardo == "medio") {
        passeMedioCarlosEduardo++;
    } else if(passeCarlosEduardo == "bom") {
        passeBomCarlosEduardo++;
    } else if(passeCarlosEduardo == "excelente") {
        passeExcelenteCarlosEduardo++;
    }

    //Verificador chute
    if(chuteCarlosEduardo == "baixo") {
        chuteBaixoCarlosEduardo++;
    } else if(chuteCarlosEduardo == "medio") {
        chuteMedioCarlosEduardo++;
    } else if(chuteCarlosEduardo == "bom") {
        chuteBomCarlosEduardo++;
    } else if(chuteCarlosEduardo == "excelente") {
        chuteExcelenteCarlosEduardo++;
    }

    //Verificador equilibrio
    if(equilibrioCarlosEduardo == "baixo") {
        equilibrioBaixoCarlosEduardo++;
    } else if(equilibrioCarlosEduardo == "medio") {
        equilibrioMedioCarlosEduardo++;
    } else if(passeCarlosEduardo == "bom") {
        equilibrioBomCarlosEduardo++;
    } else if(equilibrioCarlosEduardo == "excelente") {
        equilibrioExcelenteCarlosEduardo++;
    }

    //Verificador agilidade
    if(agilidadeCarlosEduardo == "baixo") {
        agilidadeBaixoCarlosEduardo++;
    } else if(agilidadeCarlosEduardo == "medio") {
        agilidadeMedioCarlosEduardo++;
    } else if(agilidadeCarlosEduardo == "bom") {
        agilidadeBomCarlosEduardo++;
    } else if(agilidadeCarlosEduardo == "excelente") {
        agilidadeExcelenteCarlosEduardo++;
    }

    //Verificador marcacao
    if(marcacaoCarlosEduardo == "baixo") {
        marcacaoBaixoCarlosEduardo++;
    } else if(marcacaoCarlosEduardo == "medio") {
        marcacaoMedioCarlosEduardo++;
    } else if(marcacaoCarlosEduardo == "bom") {
        marcacaoBomCarlosEduardo++;
    } else if(marcacaoCarlosEduardo == "excelente") {
        marcacaoExcelenteCarlosEduardo++;
    }

    //Verificador ataque
    if(ataqueCarlosEduardo == "baixo") {
        ataqueBaixoCarlosEduardo++;
    } else if(ataqueCarlosEduardo == "medio") {
        ataqueMedioCarlosEduardo++;
    } else if(ataqueCarlosEduardo == "bom") {
        ataqueBomCarlosEduardo++;
    } else if(ataqueCarlosEduardo == "excelente") {
        ataqueExcelenteCarlosEduardo++;
    }

    //Verificador coletividade
    if(coletividadeCarlosEduardo == "baixo") {
        coletividadeBaixoCarlosEduardo++;
    } else if(coletividadeCarlosEduardo == "medio") {
        coletividadeMedioCarlosEduardo++;
    } else if(coletividadeCarlosEduardo == "bom") {
        coletividadeBomCarlosEduardo++;
    } else if(coletividadeCarlosEduardo == "excelente") {
        coletividadeExcelenteCarlosEduardo++;
    }

    //Cálculo das médias
    let mediaBaixoCarlosEduardo = passeBaixoCarlosEduardo + chuteBaixoCarlosEduardo + equilibrioBaixoCarlosEduardo + agilidadeBaixoCarlosEduardo + marcacaoBaixoCarlosEduardo + ataqueBaixoCarlosEduardo + coletividadeBaixoCarlosEduardo;
    let mediaMedioCarlosEduardo = passeMedioCarlosEduardo + chuteMedioCarlosEduardo + equilibrioMedioCarlosEduardo + agilidadeMedioCarlosEduardo + marcacaoMedioCarlosEduardo + ataqueMedioCarlosEduardo + coletividadeMedioCarlosEduardo;
    let mediaBomCarlosEduardo = passeBomCarlosEduardo + chuteBomCarlosEduardo + equilibrioBomCarlosEduardo + agilidadeBomCarlosEduardo + marcacaoBomCarlosEduardo + ataqueBomCarlosEduardo + coletividadeBomCarlosEduardo;
    let mediaExcelenteCarlosEduardo = passeExcelenteCarlosEduardo + chuteExcelenteCarlosEduardo + equilibrioExcelenteCarlosEduardo + agilidadeExcelenteCarlosEduardo + marcacaoExcelenteCarlosEduardo + ataqueExcelenteCarlosEduardo + coletividadeExcelenteCarlosEduardo; 

    let mediaCarlosEduardo;

    if(mediaBaixoCarlosEduardo>mediaMedioCarlosEduardo && mediaBaixoCarlosEduardo>mediaBomCarlosEduardo && mediaBaixoCarlosEduardo>mediaExcelenteCarlosEduardo) {
        resultadoCarlosEduardo.style.display = 'block';
        resCarlosEduardo.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaCarlosEduardo = 1;
    } else if(mediaMedioCarlosEduardo>mediaBaixoCarlosEduardo && mediaMedioCarlosEduardo>mediaBomCarlosEduardo && mediaMedioCarlosEduardo>mediaExcelenteCarlosEduardo) {
        resultadoCarlosEduardo.style.display = 'block';
        resCarlosEduardo.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaCarlosEduardo = 2;
    } else if(mediaBomCarlosEduardo>mediaBaixoCarlosEduardo && mediaBomCarlosEduardo>mediaMedioCarlosEduardo && mediaBomCarlosEduardo>mediaExcelenteCarlosEduardo) {
        resultadoCarlosEduardo.style.display = 'block';
        resCarlosEduardo.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaCarlosEduardo = 3;
    } else if(mediaExcelenteCarlosEduardo>mediaBaixoCarlosEduardo && mediaExcelenteCarlosEduardo>mediaMedioCarlosEduardo && mediaExcelenteCarlosEduardo>mediaBomCarlosEduardo) {
        resultadoCarlosEduardo.style.display = 'block';
        resCarlosEduardo.innerHTML = "O Atleta está com a média geral Excelente, deve continuar se dedicando para manter esse ritmo!";
        mediaCarlosEduardo = 4;
    } else if(mediaBaixoCarlosEduardo == mediaMedioCarlosEduardo){
        resultadoCarlosEduardo.style.display = 'block';
        resCarlosEduardo.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaCarlosEduardo = 1;
    } else if(mediaBaixoCarlosEduardo==mediaBomCarlosEduardo){
        resultadoCarlosEduardo.style.display = 'block';
        resCarlosEduardo.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaCarlosEduardo = 2;
    } else if(mediaMedioCarlosEduardo==mediaBomCarlosEduardo){
        resultadoCarlosEduardo.style.display = 'block';
        resCarlosEduardo.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaCarlosEduardo = 2;
    } else if(mediaBaixoCarlosEduardo==mediaExcelenteCarlosEduardo){
        resultadoCarlosEduardo.style.display = 'block';
        resCarlosEduardo.innerHTML = "O Atleta está com a média geral Média, precisa melhorar o desempenho!";
        mediaCarlosEduardo = 2;
    } else if(mediaMedioCarlosEduardo==mediaExcelenteCarlosEduardo){
        resultadoCarlosEduardo.style.display = 'block';
        resCarlosEduardo.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaCarlosEduardo = 3;
    } else if(mediaBomCarlosEduardo==mediaExcelenteCarlosEduardo){
        resultadoCarlosEduardo.style.display = 'block';
        resCarlosEduardo.innerHTML = "O Atleta está com a média geral muito boa, precisa melhorar um pouco mais o desempenho!";
        mediaCarlosEduardo = 4;
    }
    //Fim área do CarlosEduardo

    //Área Atleta Kaua
    let resultadoKaua = document.getElementById("resultadoKaua");
    let resKaua = document.getElementById("resKaua");

    let passeKaua = document.querySelector('input[name="radio_passe7"]:checked').value;
    let chuteKaua = document.querySelector('input[name="radio_chute7"]:checked').value;
    let equilibrioKaua = document.querySelector('input[name="radio_equilibrio7"]:checked').value;
    let agilidadeKaua = document.querySelector('input[name="radio_agil7"]:checked').value;
    let marcacaoKaua = document.querySelector('input[name="radio_marc7"]:checked').value;
    let ataqueKaua = document.querySelector('input[name="radio_ataq7"]:checked').value;
    let coletividadeKaua = document.querySelector('input[name="radio_coletivo7"]:checked').value;

    let passeBaixoKaua = 0;
    let passeMedioKaua = 0;
    let passeBomKaua = 0;
    let passeExcelenteKaua = 0;

    let chuteBaixoKaua = 0;
    let chuteMedioKaua = 0;
    let chuteBomKaua = 0;
    let chuteExcelenteKaua = 0;

    let equilibrioBaixoKaua = 0;
    let equilibrioMedioKaua = 0;
    let equilibrioBomKaua = 0;
    let equilibrioExcelenteKaua = 0;

    let agilidadeBaixoKaua = 0;
    let agilidadeMedioKaua = 0;
    let agilidadeBomKaua = 0;
    let agilidadeExcelenteKaua = 0;

    let marcacaoBaixoKaua = 0;
    let marcacaoMedioKaua = 0;
    let marcacaoBomKaua = 0;
    let marcacaoExcelenteKaua = 0;

    let ataqueBaixoKaua = 0;
    let ataqueMedioKaua = 0;
    let ataqueBomKaua = 0;
    let ataqueExcelenteKaua = 0;

    let coletividadeBaixoKaua = 0;
    let coletividadeMedioKaua = 0;
    let coletividadeBomKaua = 0;
    let coletividadeExcelenteKaua = 0;

    //Verificador passe
    if(passeKaua == "baixo") {
        passeBaixoKaua++;
    } else if(passeKaua == "medio") {
        passeMedioKaua++;
    } else if(passeKaua == "bom") {
        passeBomKaua++;
    } else if(passeKaua == "excelente") {
        passeExcelenteKaua++;
    }

    //Verificador chute
    if(chuteKaua == "baixo") {
        chuteBaixoKaua++;
    } else if(chuteKaua == "medio") {
        chuteMedioKaua++;
    } else if(chuteKaua == "bom") {
        chuteBomKaua++;
    } else if(chuteKaua == "excelente") {
        chuteExcelenteKaua++;
    }

    //Verificador equilibrio
    if(equilibrioKaua == "baixo") {
        equilibrioBaixoKaua++;
    } else if(equilibrioKaua == "medio") {
        equilibrioMedioKaua++;
    } else if(passeKaua == "bom") {
        equilibrioBomKaua++;
    } else if(equilibrioKaua == "excelente") {
        equilibrioExcelenteKaua++;
    }

    //Verificador agilidade
    if(agilidadeKaua == "baixo") {
        agilidadeBaixoKaua++;
    } else if(agilidadeKaua == "medio") {
        agilidadeMedioKaua++;
    } else if(agilidadeKaua == "bom") {
        agilidadeBomKaua++;
    } else if(agilidadeKaua == "excelente") {
        agilidadeExcelenteKaua++;
    }

    //Verificador marcacao
    if(marcacaoKaua == "baixo") {
        marcacaoBaixoKaua++;
    } else if(marcacaoKaua == "medio") {
        marcacaoMedioKaua++;
    } else if(marcacaoKaua == "bom") {
        marcacaoBomKaua++;
    } else if(marcacaoKaua == "excelente") {
        marcacaoExcelenteKaua++;
    }

    //Verificador ataque
    if(ataqueKaua == "baixo") {
        ataqueBaixoKaua++;
    } else if(ataqueKaua == "medio") {
        ataqueMedioKaua++;
    } else if(ataqueKaua == "bom") {
        ataqueBomKaua++;
    } else if(ataqueKaua == "excelente") {
        ataqueExcelenteKaua++;
    }

    //Verificador coletividade
    if(coletividadeKaua == "baixo") {
        coletividadeBaixoKaua++;
    } else if(coletividadeKaua == "medio") {
        coletividadeMedioKaua++;
    } else if(coletividadeKaua == "bom") {
        coletividadeBomKaua++;
    } else if(coletividadeKaua == "excelente") {
        coletividadeExcelenteKaua++;
    }

    //Cálculo das médias
    let mediaBaixoKaua = passeBaixoKaua + chuteBaixoKaua + equilibrioBaixoKaua + agilidadeBaixoKaua + marcacaoBaixoKaua + ataqueBaixoKaua + coletividadeBaixoKaua;
    let mediaMedioKaua = passeMedioKaua + chuteMedioKaua + equilibrioMedioKaua + agilidadeMedioKaua + marcacaoMedioKaua + ataqueMedioKaua + coletividadeMedioKaua;
    let mediaBomKaua = passeBomKaua + chuteBomKaua + equilibrioBomKaua + agilidadeBomKaua + marcacaoBomKaua + ataqueBomKaua + coletividadeBomKaua;
    let mediaExcelenteKaua = passeExcelenteKaua + chuteExcelenteKaua + equilibrioExcelenteKaua + agilidadeExcelenteKaua + marcacaoExcelenteKaua + ataqueExcelenteKaua + coletividadeExcelenteKaua; 

    let mediaKaua;

    if(mediaBaixoKaua>mediaMedioKaua && mediaBaixoKaua>mediaBomKaua && mediaBaixoKaua>mediaExcelenteKaua) {
        resultadoKaua.style.display = 'block';
        resKaua.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaKaua = 1;
    } else if(mediaMedioKaua>mediaBaixoKaua && mediaMedioKaua>mediaBomKaua && mediaMedioKaua>mediaExcelenteKaua) {
        resultadoKaua.style.display = 'block';
        resKaua.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaKaua = 2;
    } else if(mediaBomKaua>mediaBaixoKaua && mediaBomKaua>mediaMedioKaua && mediaBomKaua>mediaExcelenteKaua) {
        resultadoKaua.style.display = 'block';
        resKaua.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaKaua = 3;
    } else if(mediaExcelenteKaua>mediaBaixoKaua && mediaExcelenteKaua>mediaMedioKaua && mediaExcelenteKaua>mediaBomKaua) {
        resultadoKaua.style.display = 'block';
        resKaua.innerHTML = "O Atleta está com a média geral Excelente, deve continuar se dedicando para manter esse ritmo!";
        mediaKaua = 4;
    } else if(mediaBaixoKaua == mediaMedioKaua){
        resultadoKaua.style.display = 'block';
        resKaua.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaKaua = 1;
    } else if(mediaBaixoKaua==mediaBomKaua){
        resultadoKaua.style.display = 'block';
        resKaua.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaKaua = 2;
    } else if(mediaMedioKaua==mediaBomKaua){
        resultadoKaua.style.display = 'block';
        resKaua.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaKaua = 2;
    } else if(mediaBaixoKaua==mediaExcelenteKaua){
        resultadoKaua.style.display = 'block';
        resKaua.innerHTML = "O Atleta está com a média geral Média, precisa melhorar o desempenho!";
        mediaKaua = 2;
    } else if(mediaMedioKaua==mediaExcelenteKaua){
        resultadoKaua.style.display = 'block';
        resKaua.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaKaua = 3;
    } else if(mediaBomKaua==mediaExcelenteKaua){
        resultadoKaua.style.display = 'block';
        resKaua.innerHTML = "O Atleta está com a média geral muito boa, precisa melhorar um pouco mais o desempenho!";
        mediaKaua = 4;
    }
    //Fim área do Kaua

    //Área Atleta Inacio
    let resultadoInacio = document.getElementById("resultadoInacio");
    let resInacio = document.getElementById("resInacio");

    let passeInacio = document.querySelector('input[name="radio_passe9"]:checked').value;
    let chuteInacio = document.querySelector('input[name="radio_chute9"]:checked').value;
    let equilibrioInacio = document.querySelector('input[name="radio_equilibrio9"]:checked').value;
    let agilidadeInacio = document.querySelector('input[name="radio_agil9"]:checked').value;
    let marcacaoInacio = document.querySelector('input[name="radio_marc9"]:checked').value;
    let ataqueInacio = document.querySelector('input[name="radio_ataq9"]:checked').value;
    let coletividadeInacio = document.querySelector('input[name="radio_coletivo9"]:checked').value;

    let passeBaixoInacio = 0;
    let passeMedioInacio = 0;
    let passeBomInacio = 0;
    let passeExcelenteInacio = 0;

    let chuteBaixoInacio = 0;
    let chuteMedioInacio = 0;
    let chuteBomInacio = 0;
    let chuteExcelenteInacio = 0;

    let equilibrioBaixoInacio = 0;
    let equilibrioMedioInacio = 0;
    let equilibrioBomInacio = 0;
    let equilibrioExcelenteInacio = 0;

    let agilidadeBaixoInacio = 0;
    let agilidadeMedioInacio = 0;
    let agilidadeBomInacio = 0;
    let agilidadeExcelenteInacio = 0;

    let marcacaoBaixoInacio = 0;
    let marcacaoMedioInacio = 0;
    let marcacaoBomInacio = 0;
    let marcacaoExcelenteInacio = 0;

    let ataqueBaixoInacio = 0;
    let ataqueMedioInacio = 0;
    let ataqueBomInacio = 0;
    let ataqueExcelenteInacio = 0;

    let coletividadeBaixoInacio = 0;
    let coletividadeMedioInacio = 0;
    let coletividadeBomInacio = 0;
    let coletividadeExcelenteInacio = 0;

    //Verificador passe
    if(passeInacio == "baixo") {
        passeBaixoInacio++;
    } else if(passeInacio == "medio") {
        passeMedioInacio++;
    } else if(passeInacio == "bom") {
        passeBomInacio++;
    } else if(passeInacio == "excelente") {
        passeExcelenteInacio++;
    }

    //Verificador chute
    if(chuteInacio == "baixo") {
        chuteBaixoInacio++;
    } else if(chuteInacio == "medio") {
        chuteMedioInacio++;
    } else if(chuteInacio == "bom") {
        chuteBomInacio++;
    } else if(chuteInacio == "excelente") {
        chuteExcelenteInacio++;
    }

    //Verificador equilibrio
    if(equilibrioInacio == "baixo") {
        equilibrioBaixoInacio++;
    } else if(equilibrioInacio == "medio") {
        equilibrioMedioInacio++;
    } else if(passeInacio == "bom") {
        equilibrioBomInacio++;
    } else if(equilibrioInacio == "excelente") {
        equilibrioExcelenteInacio++;
    }

    //Verificador agilidade
    if(agilidadeInacio == "baixo") {
        agilidadeBaixoInacio++;
    } else if(agilidadeInacio == "medio") {
        agilidadeMedioInacio++;
    } else if(agilidadeInacio == "bom") {
        agilidadeBomInacio++;
    } else if(agilidadeInacio == "excelente") {
        agilidadeExcelenteInacio++;
    }

    //Verificador marcacao
    if(marcacaoInacio == "baixo") {
        marcacaoBaixoInacio++;
    } else if(marcacaoInacio == "medio") {
        marcacaoMedioInacio++;
    } else if(marcacaoInacio == "bom") {
        marcacaoBomInacio++;
    } else if(marcacaoInacio == "excelente") {
        marcacaoExcelenteInacio++;
    }

    //Verificador ataque
    if(ataqueInacio == "baixo") {
        ataqueBaixoInacio++;
    } else if(ataqueInacio == "medio") {
        ataqueMedioInacio++;
    } else if(ataqueInacio == "bom") {
        ataqueBomInacio++;
    } else if(ataqueInacio == "excelente") {
        ataqueExcelenteInacio++;
    }

    //Verificador coletividade
    if(coletividadeInacio == "baixo") {
        coletividadeBaixoInacio++;
    } else if(coletividadeInacio == "medio") {
        coletividadeMedioInacio++;
    } else if(coletividadeInacio == "bom") {
        coletividadeBomInacio++;
    } else if(coletividadeInacio == "excelente") {
        coletividadeExcelenteInacio++;
    }

    //Cálculo das médias
    let mediaBaixoInacio = passeBaixoInacio + chuteBaixoInacio + equilibrioBaixoInacio + agilidadeBaixoInacio + marcacaoBaixoInacio + ataqueBaixoInacio + coletividadeBaixoInacio;
    let mediaMedioInacio = passeMedioInacio + chuteMedioInacio + equilibrioMedioInacio + agilidadeMedioInacio + marcacaoMedioInacio + ataqueMedioInacio + coletividadeMedioInacio;
    let mediaBomInacio = passeBomInacio + chuteBomInacio + equilibrioBomInacio + agilidadeBomInacio + marcacaoBomInacio + ataqueBomInacio + coletividadeBomInacio;
    let mediaExcelenteInacio = passeExcelenteInacio + chuteExcelenteInacio + equilibrioExcelenteInacio + agilidadeExcelenteInacio + marcacaoExcelenteInacio + ataqueExcelenteInacio + coletividadeExcelenteInacio; 

    let mediaInacio;

    if(mediaBaixoInacio>mediaMedioInacio && mediaBaixoInacio>mediaBomInacio && mediaBaixoInacio>mediaExcelenteInacio) {
        resultadoInacio.style.display = 'block';
        resInacio.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaInacio = 1;
    } else if(mediaMedioInacio>mediaBaixoInacio && mediaMedioInacio>mediaBomInacio && mediaMedioInacio>mediaExcelenteInacio) {
        resultadoInacio.style.display = 'block';
        resInacio.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaInacio = 2;
    } else if(mediaBomInacio>mediaBaixoInacio && mediaBomInacio>mediaMedioInacio && mediaBomInacio>mediaExcelenteInacio) {
        resultadoInacio.style.display = 'block';
        resInacio.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaInacio = 3;
    } else if(mediaExcelenteInacio>mediaBaixoInacio && mediaExcelenteInacio>mediaMedioInacio && mediaExcelenteInacio>mediaBomInacio) {
        resultadoInacio.style.display = 'block';
        resInacio.innerHTML = "O Atleta está com a média geral Excelente, deve continuar se dedicando para manter esse ritmo!";
        mediaInacio = 4;
    } else if(mediaBaixoInacio == mediaMedioInacio){
        resultadoInacio.style.display = 'block';
        resInacio.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaInacio = 1;
    } else if(mediaBaixoInacio==mediaBomInacio){
        resultadoInacio.style.display = 'block';
        resInacio.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaInacio = 2;
    } else if(mediaMedioInacio==mediaBomInacio){
        resultadoInacio.style.display = 'block';
        resInacio.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaInacio = 2;
    } else if(mediaBaixoInacio==mediaExcelenteInacio){
        resultadoInacio.style.display = 'block';
        resInacio.innerHTML = "O Atleta está com a média geral Média, precisa melhorar o desempenho!";
        mediaInacio = 2;
    } else if(mediaMedioInacio==mediaExcelenteInacio){
        resultadoInacio.style.display = 'block';
        resInacio.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaInacio = 3;
    } else if(mediaBomInacio==mediaExcelenteInacio){
        resultadoInacio.style.display = 'block';
        resInacio.innerHTML = "O Atleta está com a média geral muito boa, precisa melhorar um pouco mais o desempenho!";
        mediaInacio = 4;
    }
    //Fim área do Inacio

    //Área Atleta Enzo
    let resultadoEnzo = document.getElementById("resultadoEnzo");
    let resEnzo = document.getElementById("resEnzo");

    let passeEnzo = document.querySelector('input[name="radio_passe10"]:checked').value;
    let chuteEnzo = document.querySelector('input[name="radio_chute10"]:checked').value;
    let equilibrioEnzo = document.querySelector('input[name="radio_equilibrio10"]:checked').value;
    let agilidadeEnzo = document.querySelector('input[name="radio_agil10"]:checked').value;
    let marcacaoEnzo = document.querySelector('input[name="radio_marc10"]:checked').value;
    let ataqueEnzo = document.querySelector('input[name="radio_ataq10"]:checked').value;
    let coletividadeEnzo = document.querySelector('input[name="radio_coletivo10"]:checked').value;

    let passeBaixoEnzo = 0;
    let passeMedioEnzo = 0;
    let passeBomEnzo = 0;
    let passeExcelenteEnzo = 0;

    let chuteBaixoEnzo = 0;
    let chuteMedioEnzo = 0;
    let chuteBomEnzo = 0;
    let chuteExcelenteEnzo = 0;

    let equilibrioBaixoEnzo = 0;
    let equilibrioMedioEnzo = 0;
    let equilibrioBomEnzo = 0;
    let equilibrioExcelenteEnzo = 0;

    let agilidadeBaixoEnzo = 0;
    let agilidadeMedioEnzo = 0;
    let agilidadeBomEnzo = 0;
    let agilidadeExcelenteEnzo = 0;

    let marcacaoBaixoEnzo = 0;
    let marcacaoMedioEnzo = 0;
    let marcacaoBomEnzo = 0;
    let marcacaoExcelenteEnzo = 0;

    let ataqueBaixoEnzo = 0;
    let ataqueMedioEnzo = 0;
    let ataqueBomEnzo = 0;
    let ataqueExcelenteEnzo = 0;

    let coletividadeBaixoEnzo = 0;
    let coletividadeMedioEnzo = 0;
    let coletividadeBomEnzo = 0;
    let coletividadeExcelenteEnzo = 0;

    //Verificador passe
    if(passeEnzo == "baixo") {
        passeBaixoEnzo++;
    } else if(passeEnzo == "medio") {
        passeMedioEnzo++;
    } else if(passeEnzo == "bom") {
        passeBomEnzo++;
    } else if(passeEnzo == "excelente") {
        passeExcelenteEnzo++;
    }

    //Verificador chute
    if(chuteEnzo == "baixo") {
        chuteBaixoEnzo++;
    } else if(chuteEnzo == "medio") {
        chuteMedioEnzo++;
    } else if(chuteEnzo == "bom") {
        chuteBomEnzo++;
    } else if(chuteEnzo == "excelente") {
        chuteExcelenteEnzo++;
    }

    //Verificador equilibrio
    if(equilibrioEnzo == "baixo") {
        equilibrioBaixoEnzo++;
    } else if(equilibrioEnzo == "medio") {
        equilibrioMedioEnzo++;
    } else if(passeEnzo == "bom") {
        equilibrioBomEnzo++;
    } else if(equilibrioEnzo == "excelente") {
        equilibrioExcelenteEnzo++;
    }

    //Verificador agilidade
    if(agilidadeEnzo == "baixo") {
        agilidadeBaixoEnzo++;
    } else if(agilidadeEnzo == "medio") {
        agilidadeMedioEnzo++;
    } else if(agilidadeEnzo == "bom") {
        agilidadeBomEnzo++;
    } else if(agilidadeEnzo == "excelente") {
        agilidadeExcelenteEnzo++;
    }

    //Verificador marcacao
    if(marcacaoEnzo == "baixo") {
        marcacaoBaixoEnzo++;
    } else if(marcacaoEnzo == "medio") {
        marcacaoMedioEnzo++;
    } else if(marcacaoEnzo == "bom") {
        marcacaoBomEnzo++;
    } else if(marcacaoEnzo == "excelente") {
        marcacaoExcelenteEnzo++;
    }

    //Verificador ataque
    if(ataqueEnzo == "baixo") {
        ataqueBaixoEnzo++;
    } else if(ataqueEnzo == "medio") {
        ataqueMedioEnzo++;
    } else if(ataqueEnzo == "bom") {
        ataqueBomEnzo++;
    } else if(ataqueEnzo == "excelente") {
        ataqueExcelenteEnzo++;
    }

    //Verificador coletividade
    if(coletividadeEnzo == "baixo") {
        coletividadeBaixoEnzo++;
    } else if(coletividadeEnzo == "medio") {
        coletividadeMedioEnzo++;
    } else if(coletividadeEnzo == "bom") {
        coletividadeBomEnzo++;
    } else if(coletividadeEnzo == "excelente") {
        coletividadeExcelenteEnzo++;
    }

    //Cálculo das médias
    let mediaBaixoEnzo = passeBaixoEnzo + chuteBaixoEnzo + equilibrioBaixoEnzo + agilidadeBaixoEnzo + marcacaoBaixoEnzo + ataqueBaixoEnzo + coletividadeBaixoEnzo;
    let mediaMedioEnzo = passeMedioEnzo + chuteMedioEnzo + equilibrioMedioEnzo + agilidadeMedioEnzo + marcacaoMedioEnzo + ataqueMedioEnzo + coletividadeMedioEnzo;
    let mediaBomEnzo = passeBomEnzo + chuteBomEnzo + equilibrioBomEnzo + agilidadeBomEnzo + marcacaoBomEnzo + ataqueBomEnzo + coletividadeBomEnzo;
    let mediaExcelenteEnzo = passeExcelenteEnzo + chuteExcelenteEnzo + equilibrioExcelenteEnzo + agilidadeExcelenteEnzo + marcacaoExcelenteEnzo + ataqueExcelenteEnzo + coletividadeExcelenteEnzo; 

    let mediaEnzo;

    if(mediaBaixoEnzo>mediaMedioEnzo && mediaBaixoEnzo>mediaBomEnzo && mediaBaixoEnzo>mediaExcelenteEnzo) {
        resultadoEnzo.style.display = 'block';
        resEnzo.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaEnzo = 1;
    } else if(mediaMedioEnzo>mediaBaixoEnzo && mediaMedioEnzo>mediaBomEnzo && mediaMedioEnzo>mediaExcelenteEnzo) {
        resultadoEnzo.style.display = 'block';
        resEnzo.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaEnzo = 2;
    } else if(mediaBomEnzo>mediaBaixoEnzo && mediaBomEnzo>mediaMedioEnzo && mediaBomEnzo>mediaExcelenteEnzo) {
        resultadoEnzo.style.display = 'block';
        resEnzo.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaEnzo = 3;
    } else if(mediaExcelenteEnzo>mediaBaixoEnzo && mediaExcelenteEnzo>mediaMedioEnzo && mediaExcelenteEnzo>mediaBomEnzo) {
        resultadoEnzo.style.display = 'block';
        resEnzo.innerHTML = "O Atleta está com a média geral Excelente, deve continuar se dedicando para manter esse ritmo!";
        mediaEnzo = 4;
    } else if(mediaBaixoEnzo == mediaMedioEnzo){
        resultadoEnzo.style.display = 'block';
        resEnzo.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaEnzo = 1;
    } else if(mediaBaixoEnzo==mediaBomEnzo){
        resultadoEnzo.style.display = 'block';
        resEnzo.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaEnzo = 2;
    } else if(mediaMedioEnzo==mediaBomEnzo){
        resultadoEnzo.style.display = 'block';
        resEnzo.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaEnzo = 2;
    } else if(mediaBaixoEnzo==mediaExcelenteEnzo){
        resultadoEnzo.style.display = 'block';
        resEnzo.innerHTML = "O Atleta está com a média geral Média, precisa melhorar o desempenho!";
        mediaEnzo = 2;
    } else if(mediaMedioEnzo==mediaExcelenteEnzo){
        resultadoEnzo.style.display = 'block';
        resEnzo.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaEnzo = 3;
    } else if(mediaBomEnzo==mediaExcelenteEnzo){
        resultadoEnzo.style.display = 'block';
        resEnzo.innerHTML = "O Atleta está com a média geral muito boa, precisa melhorar um pouco mais o desempenho!";
        mediaEnzo = 4;
    }
    //Fim área do Enzo

    //Área Atleta Vinicius
    let resultadoVinicius = document.getElementById("resultadoVinicius");
    let resVinicius = document.getElementById("resVinicius");

    let passeVinicius = document.querySelector('input[name="radio_passe11"]:checked').value;
    let chuteVinicius = document.querySelector('input[name="radio_chute11"]:checked').value;
    let equilibrioVinicius = document.querySelector('input[name="radio_equilibrio11"]:checked').value;
    let agilidadeVinicius = document.querySelector('input[name="radio_agil11"]:checked').value;
    let marcacaoVinicius = document.querySelector('input[name="radio_marc11"]:checked').value;
    let ataqueVinicius = document.querySelector('input[name="radio_ataq11"]:checked').value;
    let coletividadeVinicius = document.querySelector('input[name="radio_coletivo11"]:checked').value;

    let passeBaixoVinicius = 0;
    let passeMedioVinicius = 0;
    let passeBomVinicius = 0;
    let passeExcelenteVinicius = 0;

    let chuteBaixoVinicius = 0;
    let chuteMedioVinicius = 0;
    let chuteBomVinicius = 0;
    let chuteExcelenteVinicius = 0;

    let equilibrioBaixoVinicius = 0;
    let equilibrioMedioVinicius = 0;
    let equilibrioBomVinicius = 0;
    let equilibrioExcelenteVinicius = 0;

    let agilidadeBaixoVinicius = 0;
    let agilidadeMedioVinicius = 0;
    let agilidadeBomVinicius = 0;
    let agilidadeExcelenteVinicius = 0;

    let marcacaoBaixoVinicius = 0;
    let marcacaoMedioVinicius = 0;
    let marcacaoBomVinicius = 0;
    let marcacaoExcelenteVinicius = 0;

    let ataqueBaixoVinicius = 0;
    let ataqueMedioVinicius = 0;
    let ataqueBomVinicius = 0;
    let ataqueExcelenteVinicius = 0;

    let coletividadeBaixoVinicius = 0;
    let coletividadeMedioVinicius = 0;
    let coletividadeBomVinicius = 0;
    let coletividadeExcelenteVinicius = 0;

    //Verificador passe
    if(passeVinicius == "baixo") {
        passeBaixoVinicius++;
    } else if(passeVinicius == "medio") {
        passeMedioVinicius++;
    } else if(passeVinicius == "bom") {
        passeBomVinicius++;
    } else if(passeVinicius == "excelente") {
        passeExcelenteVinicius++;
    }

    //Verificador chute
    if(chuteVinicius == "baixo") {
        chuteBaixoVinicius++;
    } else if(chuteVinicius == "medio") {
        chuteMedioVinicius++;
    } else if(chuteVinicius == "bom") {
        chuteBomVinicius++;
    } else if(chuteVinicius == "excelente") {
        chuteExcelenteVinicius++;
    }

    //Verificador equilibrio
    if(equilibrioVinicius == "baixo") {
        equilibrioBaixoVinicius++;
    } else if(equilibrioVinicius == "medio") {
        equilibrioMedioVinicius++;
    } else if(passeVinicius == "bom") {
        equilibrioBomVinicius++;
    } else if(equilibrioVinicius == "excelente") {
        equilibrioExcelenteVinicius++;
    }

    //Verificador agilidade
    if(agilidadeVinicius == "baixo") {
        agilidadeBaixoVinicius++;
    } else if(agilidadeVinicius == "medio") {
        agilidadeMedioVinicius++;
    } else if(agilidadeVinicius == "bom") {
        agilidadeBomVinicius++;
    } else if(agilidadeVinicius == "excelente") {
        agilidadeExcelenteVinicius++;
    }

    //Verificador marcacao
    if(marcacaoVinicius == "baixo") {
        marcacaoBaixoVinicius++;
    } else if(marcacaoVinicius == "medio") {
        marcacaoMedioVinicius++;
    } else if(marcacaoVinicius == "bom") {
        marcacaoBomVinicius++;
    } else if(marcacaoVinicius == "excelente") {
        marcacaoExcelenteVinicius++;
    }

    //Verificador ataque
    if(ataqueVinicius == "baixo") {
        ataqueBaixoVinicius++;
    } else if(ataqueVinicius == "medio") {
        ataqueMedioVinicius++;
    } else if(ataqueVinicius == "bom") {
        ataqueBomVinicius++;
    } else if(ataqueVinicius == "excelente") {
        ataqueExcelenteVinicius++;
    }

    //Verificador coletividade
    if(coletividadeVinicius == "baixo") {
        coletividadeBaixoVinicius++;
    } else if(coletividadeVinicius == "medio") {
        coletividadeMedioVinicius++;
    } else if(coletividadeVinicius == "bom") {
        coletividadeBomVinicius++;
    } else if(coletividadeVinicius == "excelente") {
        coletividadeExcelenteVinicius++;
    }

    //Cálculo das médias
    let mediaBaixoVinicius = passeBaixoVinicius + chuteBaixoVinicius + equilibrioBaixoVinicius + agilidadeBaixoVinicius + marcacaoBaixoVinicius + ataqueBaixoVinicius + coletividadeBaixoVinicius;
    let mediaMedioVinicius = passeMedioVinicius + chuteMedioVinicius + equilibrioMedioVinicius + agilidadeMedioVinicius + marcacaoMedioVinicius + ataqueMedioVinicius + coletividadeMedioVinicius;
    let mediaBomVinicius = passeBomVinicius + chuteBomVinicius + equilibrioBomVinicius + agilidadeBomVinicius + marcacaoBomVinicius + ataqueBomVinicius + coletividadeBomVinicius;
    let mediaExcelenteVinicius = passeExcelenteVinicius + chuteExcelenteVinicius + equilibrioExcelenteVinicius + agilidadeExcelenteVinicius + marcacaoExcelenteVinicius + ataqueExcelenteVinicius + coletividadeExcelenteVinicius; 

    let mediaVinicius;

    if(mediaBaixoVinicius>mediaMedioVinicius && mediaBaixoVinicius>mediaBomVinicius && mediaBaixoVinicius>mediaExcelenteVinicius) {
        resultadoVinicius.style.display = 'block';
        resVinicius.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaVinicius = 1;
    } else if(mediaMedioVinicius>mediaBaixoVinicius && mediaMedioVinicius>mediaBomVinicius && mediaMedioVinicius>mediaExcelenteVinicius) {
        resultadoVinicius.style.display = 'block';
        resVinicius.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaVinicius = 2;
    } else if(mediaBomVinicius>mediaBaixoVinicius && mediaBomVinicius>mediaMedioVinicius && mediaBomVinicius>mediaExcelenteVinicius) {
        resultadoVinicius.style.display = 'block';
        resVinicius.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaVinicius = 3;
    } else if(mediaExcelenteVinicius>mediaBaixoVinicius && mediaExcelenteVinicius>mediaMedioVinicius && mediaExcelenteVinicius>mediaBomVinicius) {
        resultadoVinicius.style.display = 'block';
        resVinicius.innerHTML = "O Atleta está com a média geral Excelente, deve continuar se dedicando para manter esse ritmo!";
        mediaVinicius = 4;
    } else if(mediaBaixoVinicius == mediaMedioVinicius){
        resultadoVinicius.style.display = 'block';
        resVinicius.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaVinicius = 1;
    } else if(mediaBaixoVinicius==mediaBomVinicius){
        resultadoVinicius.style.display = 'block';
        resVinicius.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaVinicius = 2;
    } else if(mediaMedioVinicius==mediaBomVinicius){
        resultadoVinicius.style.display = 'block';
        resVinicius.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaVinicius = 2;
    } else if(mediaBaixoVinicius==mediaExcelenteVinicius){
        resultadoVinicius.style.display = 'block';
        resVinicius.innerHTML = "O Atleta está com a média geral Média, precisa melhorar o desempenho!";
        mediaVinicius = 2;
    } else if(mediaMedioVinicius==mediaExcelenteVinicius){
        resultadoVinicius.style.display = 'block';
        resVinicius.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaVinicius = 3;
    } else if(mediaBomVinicius==mediaExcelenteVinicius){
        resultadoVinicius.style.display = 'block';
        resVinicius.innerHTML = "O Atleta está com a média geral muito boa, precisa melhorar um pouco mais o desempenho!";
        mediaVinicius = 4;
    }
    //Fim área do Vinicius

    //Área Atleta Uriel
    let resultadoUriel = document.getElementById("resultadoUriel");
    let resUriel = document.getElementById("resUriel");

    let passeUriel = document.querySelector('input[name="radio_passe12"]:checked').value;
    let chuteUriel = document.querySelector('input[name="radio_chute12"]:checked').value;
    let equilibrioUriel = document.querySelector('input[name="radio_equilibrio12"]:checked').value;
    let agilidadeUriel = document.querySelector('input[name="radio_agil12"]:checked').value;
    let marcacaoUriel = document.querySelector('input[name="radio_marc12"]:checked').value;
    let ataqueUriel = document.querySelector('input[name="radio_ataq12"]:checked').value;
    let coletividadeUriel = document.querySelector('input[name="radio_coletivo12"]:checked').value;

    let passeBaixoUriel = 0;
    let passeMedioUriel = 0;
    let passeBomUriel = 0;
    let passeExcelenteUriel = 0;

    let chuteBaixoUriel = 0;
    let chuteMedioUriel = 0;
    let chuteBomUriel = 0;
    let chuteExcelenteUriel = 0;

    let equilibrioBaixoUriel = 0;
    let equilibrioMedioUriel = 0;
    let equilibrioBomUriel = 0;
    let equilibrioExcelenteUriel = 0;

    let agilidadeBaixoUriel = 0;
    let agilidadeMedioUriel = 0;
    let agilidadeBomUriel = 0;
    let agilidadeExcelenteUriel = 0;

    let marcacaoBaixoUriel = 0;
    let marcacaoMedioUriel = 0;
    let marcacaoBomUriel = 0;
    let marcacaoExcelenteUriel = 0;

    let ataqueBaixoUriel = 0;
    let ataqueMedioUriel = 0;
    let ataqueBomUriel = 0;
    let ataqueExcelenteUriel = 0;

    let coletividadeBaixoUriel = 0;
    let coletividadeMedioUriel = 0;
    let coletividadeBomUriel = 0;
    let coletividadeExcelenteUriel = 0;

    //Verificador passe
    if(passeUriel == "baixo") {
        passeBaixoUriel++;
    } else if(passeUriel == "medio") {
        passeMedioUriel++;
    } else if(passeUriel == "bom") {
        passeBomUriel++;
    } else if(passeUriel == "excelente") {
        passeExcelenteUriel++;
    }

    //Verificador chute
    if(chuteUriel == "baixo") {
        chuteBaixoUriel++;
    } else if(chuteUriel == "medio") {
        chuteMedioUriel++;
    } else if(chuteUriel == "bom") {
        chuteBomUriel++;
    } else if(chuteUriel == "excelente") {
        chuteExcelenteUriel++;
    }

    //Verificador equilibrio
    if(equilibrioUriel == "baixo") {
        equilibrioBaixoUriel++;
    } else if(equilibrioUriel == "medio") {
        equilibrioMedioUriel++;
    } else if(passeUriel == "bom") {
        equilibrioBomUriel++;
    } else if(equilibrioUriel == "excelente") {
        equilibrioExcelenteUriel++;
    }

    //Verificador agilidade
    if(agilidadeUriel == "baixo") {
        agilidadeBaixoUriel++;
    } else if(agilidadeUriel == "medio") {
        agilidadeMedioUriel++;
    } else if(agilidadeUriel == "bom") {
        agilidadeBomUriel++;
    } else if(agilidadeUriel == "excelente") {
        agilidadeExcelenteUriel++;
    }

    //Verificador marcacao
    if(marcacaoUriel == "baixo") {
        marcacaoBaixoUriel++;
    } else if(marcacaoUriel == "medio") {
        marcacaoMedioUriel++;
    } else if(marcacaoUriel == "bom") {
        marcacaoBomUriel++;
    } else if(marcacaoUriel == "excelente") {
        marcacaoExcelenteUriel++;
    }

    //Verificador ataque
    if(ataqueUriel == "baixo") {
        ataqueBaixoUriel++;
    } else if(ataqueUriel == "medio") {
        ataqueMedioUriel++;
    } else if(ataqueUriel == "bom") {
        ataqueBomUriel++;
    } else if(ataqueUriel == "excelente") {
        ataqueExcelenteUriel++;
    }

    //Verificador coletividade
    if(coletividadeUriel == "baixo") {
        coletividadeBaixoUriel++;
    } else if(coletividadeUriel == "medio") {
        coletividadeMedioUriel++;
    } else if(coletividadeUriel == "bom") {
        coletividadeBomUriel++;
    } else if(coletividadeUriel == "excelente") {
        coletividadeExcelenteUriel++;
    }

    //Cálculo das médias
    let mediaBaixoUriel = passeBaixoUriel + chuteBaixoUriel + equilibrioBaixoUriel + agilidadeBaixoUriel + marcacaoBaixoUriel + ataqueBaixoUriel + coletividadeBaixoUriel;
    let mediaMedioUriel = passeMedioUriel + chuteMedioUriel + equilibrioMedioUriel + agilidadeMedioUriel + marcacaoMedioUriel + ataqueMedioUriel + coletividadeMedioUriel;
    let mediaBomUriel = passeBomUriel + chuteBomUriel + equilibrioBomUriel + agilidadeBomUriel + marcacaoBomUriel + ataqueBomUriel + coletividadeBomUriel;
    let mediaExcelenteUriel = passeExcelenteUriel + chuteExcelenteUriel + equilibrioExcelenteUriel + agilidadeExcelenteUriel + marcacaoExcelenteUriel + ataqueExcelenteUriel + coletividadeExcelenteUriel; 

    let mediaUriel;

    if(mediaBaixoUriel>mediaMedioUriel && mediaBaixoUriel>mediaBomUriel && mediaBaixoUriel>mediaExcelenteUriel) {
        resultadoUriel.style.display = 'block';
        resUriel.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaUriel = 1;
    } else if(mediaMedioUriel>mediaBaixoUriel && mediaMedioUriel>mediaBomUriel && mediaMedioUriel>mediaExcelenteUriel) {
        resultadoUriel.style.display = 'block';
        resUriel.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaUriel = 2;
    } else if(mediaBomUriel>mediaBaixoUriel && mediaBomUriel>mediaMedioUriel && mediaBomUriel>mediaExcelenteUriel) {
        resultadoUriel.style.display = 'block';
        resUriel.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaUriel = 3;
    } else if(mediaExcelenteUriel>mediaBaixoUriel && mediaExcelenteUriel>mediaMedioUriel && mediaExcelenteUriel>mediaBomUriel) {
        resultadoUriel.style.display = 'block';
        resUriel.innerHTML = "O Atleta está com a média geral Excelente, deve continuar se dedicando para manter esse ritmo!";
        mediaUriel = 4;
    } else if(mediaBaixoUriel == mediaMedioUriel){
        resultadoUriel.style.display = 'block';
        resUriel.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaUriel = 1;
    } else if(mediaBaixoUriel==mediaBomUriel){
        resultadoUriel.style.display = 'block';
        resUriel.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaUriel = 2;
    } else if(mediaMedioUriel==mediaBomUriel){
        resultadoUriel.style.display = 'block';
        resUriel.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaUriel = 2;
    } else if(mediaBaixoUriel==mediaExcelenteUriel){
        resultadoUriel.style.display = 'block';
        resUriel.innerHTML = "O Atleta está com a média geral Média, precisa melhorar o desempenho!";
        mediaUriel = 2;
    } else if(mediaMedioUriel==mediaExcelenteUriel){
        resultadoUriel.style.display = 'block';
        resUriel.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaUriel = 3;
    } else if(mediaBomUriel==mediaExcelenteUriel){
        resultadoUriel.style.display = 'block';
        resUriel.innerHTML = "O Atleta está com a média geral muito boa, precisa melhorar um pouco mais o desempenho!";
        mediaUriel = 4;
    }
    //Fim área do Uriel

    //Área Atleta Otavio
    let resultadoOtavio = document.getElementById("resultadoOtavio");
    let resOtavio = document.getElementById("resOtavio");

    let passeOtavio = document.querySelector('input[name="radio_passe13"]:checked').value;
    let chuteOtavio = document.querySelector('input[name="radio_chute13"]:checked').value;
    let equilibrioOtavio = document.querySelector('input[name="radio_equilibrio13"]:checked').value;
    let agilidadeOtavio = document.querySelector('input[name="radio_agil13"]:checked').value;
    let marcacaoOtavio = document.querySelector('input[name="radio_marc13"]:checked').value;
    let ataqueOtavio = document.querySelector('input[name="radio_ataq13"]:checked').value;
    let coletividadeOtavio = document.querySelector('input[name="radio_coletivo13"]:checked').value;

    let passeBaixoOtavio = 0;
    let passeMedioOtavio = 0;
    let passeBomOtavio = 0;
    let passeExcelenteOtavio = 0;

    let chuteBaixoOtavio = 0;
    let chuteMedioOtavio = 0;
    let chuteBomOtavio = 0;
    let chuteExcelenteOtavio = 0;

    let equilibrioBaixoOtavio = 0;
    let equilibrioMedioOtavio = 0;
    let equilibrioBomOtavio = 0;
    let equilibrioExcelenteOtavio = 0;

    let agilidadeBaixoOtavio = 0;
    let agilidadeMedioOtavio = 0;
    let agilidadeBomOtavio = 0;
    let agilidadeExcelenteOtavio = 0;

    let marcacaoBaixoOtavio = 0;
    let marcacaoMedioOtavio = 0;
    let marcacaoBomOtavio = 0;
    let marcacaoExcelenteOtavio = 0;

    let ataqueBaixoOtavio = 0;
    let ataqueMedioOtavio = 0;
    let ataqueBomOtavio = 0;
    let ataqueExcelenteOtavio = 0;

    let coletividadeBaixoOtavio = 0;
    let coletividadeMedioOtavio = 0;
    let coletividadeBomOtavio = 0;
    let coletividadeExcelenteOtavio = 0;

    //Verificador passe
    if(passeOtavio == "baixo") {
        passeBaixoOtavio++;
    } else if(passeOtavio == "medio") {
        passeMedioOtavio++;
    } else if(passeOtavio == "bom") {
        passeBomOtavio++;
    } else if(passeOtavio == "excelente") {
        passeExcelenteOtavio++;
    }

    //Verificador chute
    if(chuteOtavio == "baixo") {
        chuteBaixoOtavio++;
    } else if(chuteOtavio == "medio") {
        chuteMedioOtavio++;
    } else if(chuteOtavio == "bom") {
        chuteBomOtavio++;
    } else if(chuteOtavio == "excelente") {
        chuteExcelenteOtavio++;
    }

    //Verificador equilibrio
    if(equilibrioOtavio == "baixo") {
        equilibrioBaixoOtavio++;
    } else if(equilibrioOtavio == "medio") {
        equilibrioMedioOtavio++;
    } else if(passeOtavio == "bom") {
        equilibrioBomOtavio++;
    } else if(equilibrioOtavio == "excelente") {
        equilibrioExcelenteOtavio++;
    }

    //Verificador agilidade
    if(agilidadeOtavio == "baixo") {
        agilidadeBaixoOtavio++;
    } else if(agilidadeOtavio == "medio") {
        agilidadeMedioOtavio++;
    } else if(agilidadeOtavio == "bom") {
        agilidadeBomOtavio++;
    } else if(agilidadeOtavio == "excelente") {
        agilidadeExcelenteOtavio++;
    }

    //Verificador marcacao
    if(marcacaoOtavio == "baixo") {
        marcacaoBaixoOtavio++;
    } else if(marcacaoOtavio == "medio") {
        marcacaoMedioOtavio++;
    } else if(marcacaoOtavio == "bom") {
        marcacaoBomOtavio++;
    } else if(marcacaoOtavio == "excelente") {
        marcacaoExcelenteOtavio++;
    }

    //Verificador ataque
    if(ataqueOtavio == "baixo") {
        ataqueBaixoOtavio++;
    } else if(ataqueOtavio == "medio") {
        ataqueMedioOtavio++;
    } else if(ataqueOtavio == "bom") {
        ataqueBomOtavio++;
    } else if(ataqueOtavio == "excelente") {
        ataqueExcelenteOtavio++;
    }

    //Verificador coletividade
    if(coletividadeOtavio == "baixo") {
        coletividadeBaixoOtavio++;
    } else if(coletividadeOtavio == "medio") {
        coletividadeMedioOtavio++;
    } else if(coletividadeOtavio == "bom") {
        coletividadeBomOtavio++;
    } else if(coletividadeOtavio == "excelente") {
        coletividadeExcelenteOtavio++;
    }

    //Cálculo das médias
    let mediaBaixoOtavio = passeBaixoOtavio + chuteBaixoOtavio + equilibrioBaixoOtavio + agilidadeBaixoOtavio + marcacaoBaixoOtavio + ataqueBaixoOtavio + coletividadeBaixoOtavio;
    let mediaMedioOtavio = passeMedioOtavio + chuteMedioOtavio + equilibrioMedioOtavio + agilidadeMedioOtavio + marcacaoMedioOtavio + ataqueMedioOtavio + coletividadeMedioOtavio;
    let mediaBomOtavio = passeBomOtavio + chuteBomOtavio + equilibrioBomOtavio + agilidadeBomOtavio + marcacaoBomOtavio + ataqueBomOtavio + coletividadeBomOtavio;
    let mediaExcelenteOtavio = passeExcelenteOtavio + chuteExcelenteOtavio + equilibrioExcelenteOtavio + agilidadeExcelenteOtavio + marcacaoExcelenteOtavio + ataqueExcelenteOtavio + coletividadeExcelenteOtavio; 

    let mediaOtavio;

    if(mediaBaixoOtavio>mediaMedioOtavio && mediaBaixoOtavio>mediaBomOtavio && mediaBaixoOtavio>mediaExcelenteOtavio) {
        resultadoOtavio.style.display = 'block';
        resOtavio.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaOtavio = 1;
    } else if(mediaMedioOtavio>mediaBaixoOtavio && mediaMedioOtavio>mediaBomOtavio && mediaMedioOtavio>mediaExcelenteOtavio) {
        resultadoOtavio.style.display = 'block';
        resOtavio.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaOtavio = 2;
    } else if(mediaBomOtavio>mediaBaixoOtavio && mediaBomOtavio>mediaMedioOtavio && mediaBomOtavio>mediaExcelenteOtavio) {
        resultadoOtavio.style.display = 'block';
        resOtavio.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaOtavio = 3;
    } else if(mediaExcelenteOtavio>mediaBaixoOtavio && mediaExcelenteOtavio>mediaMedioOtavio && mediaExcelenteOtavio>mediaBomOtavio) {
        resultadoOtavio.style.display = 'block';
        resOtavio.innerHTML = "O Atleta está com a média geral Excelente, deve continuar se dedicando para manter esse ritmo!";
        mediaOtavio = 4;
    } else if(mediaBaixoOtavio == mediaMedioOtavio){
        resultadoOtavio.style.display = 'block';
        resOtavio.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaOtavio = 1;
    } else if(mediaBaixoOtavio==mediaBomOtavio){
        resultadoOtavio.style.display = 'block';
        resOtavio.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaOtavio = 2;
    } else if(mediaMedioOtavio==mediaBomOtavio){
        resultadoOtavio.style.display = 'block';
        resOtavio.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaOtavio = 2;
    } else if(mediaBaixoOtavio==mediaExcelenteOtavio){
        resultadoOtavio.style.display = 'block';
        resOtavio.innerHTML = "O Atleta está com a média geral Média, precisa melhorar o desempenho!";
        mediaOtavio = 2;
    } else if(mediaMedioOtavio==mediaExcelenteOtavio){
        resultadoOtavio.style.display = 'block';
        resOtavio.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaOtavio = 3;
    } else if(mediaBomOtavio==mediaExcelenteOtavio){
        resultadoOtavio.style.display = 'block';
        resOtavio.innerHTML = "O Atleta está com a média geral muito boa, precisa melhorar um pouco mais o desempenho!";
        mediaOtavio = 4;
    }
    //Fim área do Otavio

    //Área Atleta Francisco
    let resultadoFrancisco = document.getElementById("resultadoFrancisco");
    let resFrancisco = document.getElementById("resFrancisco");

    let passeFrancisco = document.querySelector('input[name="radio_passe14"]:checked').value;
    let chuteFrancisco = document.querySelector('input[name="radio_chute14"]:checked').value;
    let equilibrioFrancisco = document.querySelector('input[name="radio_equilibrio14"]:checked').value;
    let agilidadeFrancisco = document.querySelector('input[name="radio_agil14"]:checked').value;
    let marcacaoFrancisco = document.querySelector('input[name="radio_marc14"]:checked').value;
    let ataqueFrancisco = document.querySelector('input[name="radio_ataq14"]:checked').value;
    let coletividadeFrancisco = document.querySelector('input[name="radio_coletivo14"]:checked').value;

    let passeBaixoFrancisco = 0;
    let passeMedioFrancisco = 0;
    let passeBomFrancisco = 0;
    let passeExcelenteFrancisco = 0;

    let chuteBaixoFrancisco = 0;
    let chuteMedioFrancisco = 0;
    let chuteBomFrancisco = 0;
    let chuteExcelenteFrancisco = 0;

    let equilibrioBaixoFrancisco = 0;
    let equilibrioMedioFrancisco = 0;
    let equilibrioBomFrancisco = 0;
    let equilibrioExcelenteFrancisco = 0;

    let agilidadeBaixoFrancisco = 0;
    let agilidadeMedioFrancisco = 0;
    let agilidadeBomFrancisco = 0;
    let agilidadeExcelenteFrancisco = 0;

    let marcacaoBaixoFrancisco = 0;
    let marcacaoMedioFrancisco = 0;
    let marcacaoBomFrancisco = 0;
    let marcacaoExcelenteFrancisco = 0;

    let ataqueBaixoFrancisco = 0;
    let ataqueMedioFrancisco = 0;
    let ataqueBomFrancisco = 0;
    let ataqueExcelenteFrancisco = 0;

    let coletividadeBaixoFrancisco = 0;
    let coletividadeMedioFrancisco = 0;
    let coletividadeBomFrancisco = 0;
    let coletividadeExcelenteFrancisco = 0;

    //Verificador passe
    if(passeFrancisco == "baixo") {
        passeBaixoFrancisco++;
    } else if(passeFrancisco == "medio") {
        passeMedioFrancisco++;
    } else if(passeFrancisco == "bom") {
        passeBomFrancisco++;
    } else if(passeFrancisco == "excelente") {
        passeExcelenteFrancisco++;
    }

    //Verificador chute
    if(chuteFrancisco == "baixo") {
        chuteBaixoFrancisco++;
    } else if(chuteFrancisco == "medio") {
        chuteMedioFrancisco++;
    } else if(chuteFrancisco == "bom") {
        chuteBomFrancisco++;
    } else if(chuteFrancisco == "excelente") {
        chuteExcelenteFrancisco++;
    }

    //Verificador equilibrio
    if(equilibrioFrancisco == "baixo") {
        equilibrioBaixoFrancisco++;
    } else if(equilibrioFrancisco == "medio") {
        equilibrioMedioFrancisco++;
    } else if(passeFrancisco == "bom") {
        equilibrioBomFrancisco++;
    } else if(equilibrioFrancisco == "excelente") {
        equilibrioExcelenteFrancisco++;
    }

    //Verificador agilidade
    if(agilidadeFrancisco == "baixo") {
        agilidadeBaixoFrancisco++;
    } else if(agilidadeFrancisco == "medio") {
        agilidadeMedioFrancisco++;
    } else if(agilidadeFrancisco == "bom") {
        agilidadeBomFrancisco++;
    } else if(agilidadeFrancisco == "excelente") {
        agilidadeExcelenteFrancisco++;
    }

    //Verificador marcacao
    if(marcacaoFrancisco == "baixo") {
        marcacaoBaixoFrancisco++;
    } else if(marcacaoFrancisco == "medio") {
        marcacaoMedioFrancisco++;
    } else if(marcacaoFrancisco == "bom") {
        marcacaoBomFrancisco++;
    } else if(marcacaoFrancisco == "excelente") {
        marcacaoExcelenteFrancisco++;
    }

    //Verificador ataque
    if(ataqueFrancisco == "baixo") {
        ataqueBaixoFrancisco++;
    } else if(ataqueFrancisco == "medio") {
        ataqueMedioFrancisco++;
    } else if(ataqueFrancisco == "bom") {
        ataqueBomFrancisco++;
    } else if(ataqueFrancisco == "excelente") {
        ataqueExcelenteFrancisco++;
    }

    //Verificador coletividade
    if(coletividadeFrancisco == "baixo") {
        coletividadeBaixoFrancisco++;
    } else if(coletividadeFrancisco == "medio") {
        coletividadeMedioFrancisco++;
    } else if(coletividadeFrancisco == "bom") {
        coletividadeBomFrancisco++;
    } else if(coletividadeFrancisco == "excelente") {
        coletividadeExcelenteFrancisco++;
    }

    //Cálculo das médias
    let mediaBaixoFrancisco = passeBaixoFrancisco + chuteBaixoFrancisco + equilibrioBaixoFrancisco + agilidadeBaixoFrancisco + marcacaoBaixoFrancisco + ataqueBaixoFrancisco + coletividadeBaixoFrancisco;
    let mediaMedioFrancisco = passeMedioFrancisco + chuteMedioFrancisco + equilibrioMedioFrancisco + agilidadeMedioFrancisco + marcacaoMedioFrancisco + ataqueMedioFrancisco + coletividadeMedioFrancisco;
    let mediaBomFrancisco = passeBomFrancisco + chuteBomFrancisco + equilibrioBomFrancisco + agilidadeBomFrancisco + marcacaoBomFrancisco + ataqueBomFrancisco + coletividadeBomFrancisco;
    let mediaExcelenteFrancisco = passeExcelenteFrancisco + chuteExcelenteFrancisco + equilibrioExcelenteFrancisco + agilidadeExcelenteFrancisco + marcacaoExcelenteFrancisco + ataqueExcelenteFrancisco + coletividadeExcelenteFrancisco; 

    let mediaFrancisco;

    if(mediaBaixoFrancisco>mediaMedioFrancisco && mediaBaixoFrancisco>mediaBomFrancisco && mediaBaixoFrancisco>mediaExcelenteFrancisco) {
        resultadoFrancisco.style.display = 'block';
        resFrancisco.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaFrancisco = 1;
    } else if(mediaMedioFrancisco>mediaBaixoFrancisco && mediaMedioFrancisco>mediaBomFrancisco && mediaMedioFrancisco>mediaExcelenteFrancisco) {
        resultadoFrancisco.style.display = 'block';
        resFrancisco.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaFrancisco = 2;
    } else if(mediaBomFrancisco>mediaBaixoFrancisco && mediaBomFrancisco>mediaMedioFrancisco && mediaBomFrancisco>mediaExcelenteFrancisco) {
        resultadoFrancisco.style.display = 'block';
        resFrancisco.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaFrancisco = 3;
    } else if(mediaExcelenteFrancisco>mediaBaixoFrancisco && mediaExcelenteFrancisco>mediaMedioFrancisco && mediaExcelenteFrancisco>mediaBomFrancisco) {
        resultadoFrancisco.style.display = 'block';
        resFrancisco.innerHTML = "O Atleta está com a média geral Excelente, deve continuar se dedicando para manter esse ritmo!";
        mediaFrancisco = 4;
    } else if(mediaBaixoFrancisco == mediaMedioFrancisco){
        resultadoFrancisco.style.display = 'block';
        resFrancisco.innerHTML = "O Atleta está com a média geral Baixa, precisa melhorar muito o desempenho!";
        mediaFrancisco = 1;
    } else if(mediaBaixoFrancisco==mediaBomFrancisco){
        resultadoFrancisco.style.display = 'block';
        resFrancisco.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaFrancisco = 2;
    } else if(mediaMedioFrancisco==mediaBomFrancisco){
        resultadoFrancisco.style.display = 'block';
        resFrancisco.innerHTML = "O Atleta está com a média geral na Média, precisa melhorar o desempenho!";
        mediaFrancisco = 2;
    } else if(mediaBaixoFrancisco==mediaExcelenteFrancisco){
        resultadoFrancisco.style.display = 'block';
        resFrancisco.innerHTML = "O Atleta está com a média geral Média, precisa melhorar o desempenho!";
        mediaFrancisco = 2;
    } else if(mediaMedioFrancisco==mediaExcelenteFrancisco){
        resultadoFrancisco.style.display = 'block';
        resFrancisco.innerHTML = "O Atleta está com a média geral Boa, precisa melhorar um pouco mais o desempenho!";
        mediaFrancisco = 3;
    } else if(mediaBomFrancisco==mediaExcelenteFrancisco){
        resultadoFrancisco.style.display = 'block';
        resFrancisco.innerHTML = "O Atleta está com a média geral muito boa, precisa melhorar um pouco mais o desempenho!";
        mediaFrancisco = 4;
    }
    //Fim área do Francisco

    //Cálculo da média geral
    let mediaBaixoGeral = mediaBaixoThiago + mediaBaixoHenry + mediaBaixoMatheus + mediaBaixoNykolas + mediaBaixoCarlosEduardo + mediaBaixoEnzo + mediaBaixoFrancisco + mediaBaixoGabriel + mediaBaixoInacio + mediaBaixoKaua + mediaBaixoOtavio + mediaBaixoUriel + mediaBaixoVicente + mediaBaixoVinicius + mediaBaixoYann;
    let mediaMedioGeral = mediaMedioThiago + mediaMedioHenry + mediaMedioMatheus + mediaMedioNykolas + mediaMedioCarlosEduardo + mediaMedioEnzo + mediaMedioFrancisco + mediaMedioGabriel + mediaMedioInacio + mediaMedioKaua + mediaMedioOtavio + mediaMedioUriel + mediaMedioVicente + mediaMedioVinicius + mediaMedioYann;
    let mediaBomGeral = mediaBomThiago + mediaBomHenry + mediaBomMatheus + mediaBomNykolas + mediaBomCarlosEduardo + mediaBomEnzo + mediaBomFrancisco + mediaBomGabriel + mediaBomInacio + mediaBomKaua + mediaBomOtavio + mediaBomUriel + mediaBomVicente + mediaBomVinicius + mediaBomYann;
    let mediaExcelenteGeral = mediaExcelenteThiago + mediaExcelenteHenry + mediaExcelenteMatheus + mediaExcelenteNykolas + mediaExcelenteCarlosEduardo + mediaExcelenteEnzo + mediaExcelenteFrancisco + mediaExcelenteGabriel + mediaExcelenteInacio + mediaExcelenteKaua + mediaExcelenteOtavio + mediaExcelenteUriel + mediaExcelenteVicente + mediaExcelenteVinicius + mediaExcelenteYann;

    let mediaGeral;

    if(mediaBaixoGeral>mediaMedioGeral && mediaBaixoGeral>mediaBomGeral && mediaBaixoGeral>mediaExcelenteGeral){
        resultadoGeral.style.display = 'block';
        resGeral.innerHTML = "O Grupo está com a média geral Baixa, precisamos melhorar muito o desempenho!";
        mediaGeral = 1;
    } else if(mediaMedioGeral>mediaBaixoGeral && mediaMedioGeral>mediaBomGeral && mediaMedioGeral>mediaExcelenteGeral){
        resultadoGeral.style.display = 'block';
        resGeral.innerHTML = "O Grupo está com a média geral Média, precisamos melhorar o desempenho!";
        mediaGeral = 2;
    } else if(mediaBomGeral>mediaBaixoGeral && mediaBomGeral>mediaMedioGeral && mediaBomGeral>mediaExcelenteGeral){
        resultadoGeral.style.display = 'block';
        resGeral.innerHTML = "O Grupo está com a média geral Boa, precisamos melhorar um pouco mais o desempenho!";
        mediaGeral = 3;
    } else if(mediaExcelenteGeral>mediaBaixoGeral && mediaExcelenteGeral>mediaBomGeral && mediaExcelenteGeral>mediaBomGeral){
        resultadoGeral.style.display = 'block';
        resGeral.innerHTML = "O Grupo está com a média geral Excelente, precisamos continuar o trabalho para manter esse desempenho!";
        mediaGeral = 4;
    }

    //Cálculo de Atletas que ficaram acima da média
    let thiago;
    let henry;
    let matheus;
    let nykolas;
    let yann;
    let vicente;
    let gabriel;
    let carlosEduardo;
    let kaua;
    let inacio;
    let enzo;
    let vinicius;
    let uriel;
    let otavio;
    let francisco;
    if(mediaThiago>mediaGeral){
        thiago = "Thiago";
    } if(mediaHenry>mediaGeral){
        henry = "Henry";
    } if(mediaMatheus>mediaGeral){
        matheus = "Matheus";
    } if(mediaNykolas>mediaGeral){
        nykolas = "Nykolas";
    } if(mediaYann>mediaGeral){
        yann = "Yann";
    } if(mediaVicente>mediaGeral){
        vicente = "Vicente";
    } if(mediaGabriel>mediaGeral){
        gabriel = "Gabriel";
    } if(mediaCarlosEduardo>mediaGeral){
        carlosEduardo = "Carlos Eduardo";
    } if(mediaKaua>mediaGeral){
        kaua = "Kauã";
    } if(mediaInacio>mediaGeral){
        inacio = "Inácio";
    } if(mediaEnzo>mediaGeral){
        enzo = "Enzo";
    } if(mediaVinicius>mediaGeral){
        vinicius = "Vinícius";
    } if(mediaUriel>mediaGeral){
        uriel = "Uriel";
    } if(mediaOtavio>mediaGeral){
        otavio = "Otávio";
    } if(mediaFrancisco>mediaGeral){
        francisco = "Francisco";
    } 

    let atletas = [thiago, henry, matheus, nykolas, yann, vicente, gabriel, carlosEduardo, kaua, inacio, enzo, vinicius, uriel, otavio, francisco];
    let atletasAcimaMedia = atletas.filter(x => x != undefined);
    let listarAtletas = "";

    resultadoAcimaMedia.style.display = 'block';
    atletasAcimaMedia.forEach(atleta => {
        listarAtletas += "<p>" + atleta + "</p>";
    });
    
      resAcimaMedia.innerHTML = "Atletas acima da Média: " + listarAtletas;

    //Alterar botão
    document.getElementById("btnCalcular").style.display = 'none';
    document.getElementById("btnCalcular2").style.display = 'block';
}