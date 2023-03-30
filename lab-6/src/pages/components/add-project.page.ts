import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

class AddProject extends BasePage {
    private nameTextField: string = '#edit_project_modal_field_name';
    private addButton: string = '//span[text()="Add"]//parent::button';
    private cancelButton: string = '//span[text()="Cancel"]//parent::button';  
    private colorButtonDropdown: string = "//button[@class='color_dropdown_toggle form_field_control']";   

    // Extra Points add select the following behavior
    
    //private colorDropdown: string = '.color_dropdown_toggle';
    //private favoritesToggle: string = '//div[@class='reactist_switch']';
    //private optionListView: string = '//div[@class='edit_project_modal__list_preview']';
    //private optionBoardView: string = '//div[@class='edit_project_modal__board_preview']';

    constructor(){
        super();
    }

    async setProjectName(projectName: string) {
        await ElementActions.setText(this.nameTextField, projectName);
    }

    async clickAdd() {
        await ElementActions.click(this.addButton);
    }

    async clickRemove() {
        await ElementActions.click(this.addButton);
    }

    async createNewProject(projectName: string, color: string, isFavorite: boolean, view: string) {
    
        
    }
    async ClickTextOption(textNameOption: string){        
        textNameOption = `//div[normalize-space()="${textNameOption}"]`;  
        console.log(textNameOption);
        await ElementActions.click(textNameOption);
    }
    async ClickDropdownSelectColor(projectColor: string) {     
        projectColor = `//span[normalize-space()='${projectColor}']`;
        console.log(projectColor);
            
        await ElementActions.setColor(this.colorButtonDropdown, projectColor);   
    } 
    
   
}

export const addProjectPane = new AddProject();