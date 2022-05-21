package com.skilldistillery.entities;

import java.time.LocalDateTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "launchevent")
public class LaunchEvent {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;

	String title;
	String description;
	
	@Column(name = "cover_image")
	String coverImage;
	
	@Column(name = "event_date")
	String eventDate;
	
	@Column(name = "contact_email")
	String contactEmail;
	
	@Column(name = "event_website")
	String eventWebsite;
	
	@Column(name = "source_announcement")
	String sourceAnnouncement;
	
	String blockchain;
	
	String marketplace;
	
	String categories;
	
	@Column(name = "marketplace_url")
	String marketplaceUrl;
	
	@Column(name = "project_twitter")
	String projectTwitter;
	
	@Column(name = "project_discord")
	String projectDiscord;

	public LaunchEvent() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCoverImage() {
		return coverImage;
	}

	public void setCoverImage(String coverImage) {
		this.coverImage = coverImage;
	}

	public String getEventDate() {
		return eventDate;
	}

	public void setEventDate(String eventDate) {
		this.eventDate = eventDate;
	}

	public String getContactEmail() {
		return contactEmail;
	}

	public void setContactEmail(String contactEmail) {
		this.contactEmail = contactEmail;
	}

	public String getEventWebsite() {
		return eventWebsite;
	}

	public void setEventWebsite(String eventWebsite) {
		this.eventWebsite = eventWebsite;
	}

	public String getSourceAnnouncement() {
		return sourceAnnouncement;
	}

	public void setSourceAnnouncement(String sourceAnnouncement) {
		this.sourceAnnouncement = sourceAnnouncement;
	}

	public String getBlockchain() {
		return blockchain;
	}

	public void setBlockchain(String blockchain) {
		this.blockchain = blockchain;
	}

	public String getMarketplace() {
		return marketplace;
	}

	public void setMarketplace(String marketplace) {
		this.marketplace = marketplace;
	}

	public String getCategories() {
		return categories;
	}

	public void setCategories(String categories) {
		this.categories = categories;
	}

	public String getMarketplaceUrl() {
		return marketplaceUrl;
	}

	public void setMarketplaceUrl(String marketplaceUrl) {
		this.marketplaceUrl = marketplaceUrl;
	}

	public String getProjectTwitter() {
		return projectTwitter;
	}

	public void setProjectTwitter(String projectTwitter) {
		this.projectTwitter = projectTwitter;
	}

	public String getProjectDiscord() {
		return projectDiscord;
	}

	public void setProjectDiscord(String projectDiscord) {
		this.projectDiscord = projectDiscord;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		LaunchEvent other = (LaunchEvent) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "LaunchEvent [id=" + id + ", title=" + title + ", eventDate=" + eventDate + ", contactEmail="
				+ contactEmail + ", eventWebsite=" + eventWebsite + ", categories=" + categories + "]";
	}

}
