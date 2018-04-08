package controllers;

import model.UploadFilePathDAO;
import play.libs.Json;
import play.mvc.*;

import javax.swing.*;
import java.awt.*;
import java.io.File;
import java.io.IOException;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
    public Result index() {
        return ok(views.html.index.render());
    }


    public Result adminView() { return ok(views.html.dollarLuxuryAdminView.render()); }

    public Result upload() {
        Http.MultipartFormData<File> body = request().body().asMultipartFormData();
        Http.MultipartFormData.FilePart<File> picture = body.getFile("picture");
        if (picture != null) {
            String fileName = picture.getFilename();
            String contentType = picture.getContentType();
            File file = picture.getFile();
            return ok("File uploaded" + fileName +  " plus " + contentType);
        } else {
            System.out.println("failed **(*(*(*(");
            flash("error", "Missing file");
            return badRequest();
        }
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

        }else{

            return ok(Json.toJson(fileName));

        }

        return ok(Json.toJson(fileName));
    }

}
