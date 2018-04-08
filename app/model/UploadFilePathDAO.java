package model;

import play.libs.Json;
import play.mvc.Result;

import javax.swing.*;
import java.awt.*;
import java.io.File;
import java.io.IOException;

import static play.mvc.Results.ok;

public class UploadFilePathDAO {

    public String filePath;

    public String getFilePath() {
        return filePath;
    }

    public void setFilePath(String filePath) {
        this.filePath = filePath;
    }

    @Override
    public String toString() {
        return "UploadFilePathDAO{" +
                "filePath='" + filePath + '\'' +
                '}';
    }

    public Result uploadFile() throws IOException {

        Desktop d = Desktop.getDesktop();
        File f = new File("/home/james/Desktop/");
        String x ="";
        String fileName ="";
        UploadFilePathDAO uf = new UploadFilePathDAO();
        x=uf.openDesktop();

        if(!x.isEmpty()){
            //d.open(f);
            String t = "";
            JFileChooser fileChooser = new JFileChooser(f);

            int returnVal = fileChooser.showOpenDialog(fileChooser);
            fileName = fileChooser.getSelectedFile().getAbsolutePath();

            System.out.println(fileName + "**********");
            return ok(Json.toJson(fileName));
        }
        return ok(Json.toJson("no file found"));

    }

    public String openDesktop(){
        Desktop d = Desktop.getDesktop();
        if (d.isDesktopSupported()) {

            return ("system is supported");
        }else{
            return("desktop not supported **&()*&(*&(*&(*7");
        }

    }



}
