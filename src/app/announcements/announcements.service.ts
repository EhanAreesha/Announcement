import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class AnnouncementService {

    _url_list = "./../../assets/data/mock-announcements-list.json"
    _url_details = "./../../assets/data/mock-announcement-details.json"
    _url_edit = "./../../assets/data/mock-announcements-edit.json"
    _url_draft = "./../../assets/data/mock-annoucements-list-admin-draft.json"
    _url_published = "./../../assets/data/mock-annoucements-list-admin-published.json"
    _url_archived = "./../../assets/data/mock-annoucements-list-admin-archived.json"

    constructor(private http: HttpClient) {}

    getAnnouncementListData(): Observable<IAnnouncementsList[]> {
        return this.http.get<IAnnouncementsList[]>(this._url_list);
    }

    getDetailsData(): Observable<IAnnouncementDetails> {
        return this.http.get<IAnnouncementDetails>(this._url_details);
    }

    getEditedData(): Observable<IAnnouncements> {
        return this.http.get<IAnnouncements>(this._url_edit);
    }

    getDraftData(): Observable<IDraftAnnouncements[]> {
        return this.http.get<IDraftAnnouncements[]>(this._url_draft);
    }
    
    getArchivedData(): Observable<IArchivedAnnouncements[]> {
        return this.http.get<IArchivedAnnouncements[]>(this._url_archived);
    }

    getPublishedData(): Observable<IPublishedAnnouncements[]> {
        return this.http.get<IPublishedAnnouncements[]>(this._url_published);
    }
}