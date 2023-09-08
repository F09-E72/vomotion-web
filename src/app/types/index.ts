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

export interface Deck extends baseNameModel {
    NoteId?: number,
}

export interface FlashCard extends baseNameModel {
    DeckId?: number,
    FrontWord: string,
    FrontSentences: string[],
    BackWord: string,
    BackSentences: string[],
    Severity: number
}
