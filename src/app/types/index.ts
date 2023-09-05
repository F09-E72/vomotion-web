export interface Note extends baseNameModel {
    TitleOriginal: string,
    ContentOriginal: string,
    HighlitedPositionsOriginal: number[],
    ContentTranslated: string,
    TitleTranslated: string,
    HighlitedPositionsTranslated: string,
    UserId: number,
    NotebookId: number
}

interface baseNameModel {
    Id?: number,
    DateAdded?: Date,
    DateUpdated?: Date
}

export interface Language extends baseNameModel {
    NameEn: string,
    NameOriginal: string
}

export interface Notebook extends baseNameModel {

}

export interface User extends baseNameModel {
    Id: number,
    FirstName: string,
    LastName: string,
    UserName: string,
    NativeLanguageId: number,
    TargetLanguages?: Language[] 
    Notebooks?: Notebook[]
    Email: string
}

export interface FlashCardApiProps extends FlashCardProperties {
    NoteId: number,
}

export interface FlashCardProperties extends baseNameModel {
    FrontWord: string,
    FrontSentence: string,
    BackWord: string,
    BackSentence: string,
    Severity: number
}
