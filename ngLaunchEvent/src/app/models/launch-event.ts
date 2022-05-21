export class LaunchEvent {
    id: number;
    title: string;
    description: string;
    eventDate: string;
    contactEmail: string;
    eventWebsite: string;
    sourceAnnouncement: string;
    blockchain: string;
    marketplace: string;
    categories: string;
    marketplaceUrl: string;
    projectTwitter: string;
    projectDiscord: string;

    constructor(
        id: number=0,
        title: string='',
        description: string='',
        eventDate: string='',
        contactEmail: string='',
        eventWebsite: string='',
        sourceAnnouncement: string='',
        blockchain: string='',
        marketplace: string='',
        categories: string='',
        marketplaceUrl: string='',
        projectTwitter: string='',
        projectDiscord: string=''
    ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.eventDate = eventDate;
        this.contactEmail = contactEmail;
        this.eventWebsite = eventWebsite;
        this.sourceAnnouncement = sourceAnnouncement;
        this.blockchain = blockchain;
        this.marketplace = marketplace;
        this.categories = categories;
        this.marketplaceUrl = marketplaceUrl;
        this.projectTwitter = projectTwitter;
        this.projectDiscord = projectDiscord;
    }
}
