import requests
import json
import os

INSTAGRAM_USERNAME = "cr7cristianoronaldo"
IMAGE_DIR = "assets/instagram_images"

def get_instagram_images(username):
    url = f"https://www.instagram.com/{username}/?__a=1"
    response = requests.get(url)
    data = response.json()
    posts = data["graphql"]["user"]["edge_owner_to_timeline_media"]["edges"]

    images = []
    for post in posts:
        node = post["node"]
        if node["__typename"] == "GraphImage":
            images.append(node["display_url"])
        elif node["__typename"] == "GraphSidecar":
            for edge in node["edge_sidecar_to_children"]["edges"]:
                if edge["node"]["__typename"] == "GraphImage":
                    images.append(edge["node"]["display_url"])

    return images

def save_images(images, directory):
    if not os.path.exists(directory):
        os.makedirs(directory)

    for idx, img_url in enumerate(images):
        img_data = requests.get(img_url).content
        with open(os.path.join(directory, f"image_{idx}.jpg"), 'wb') as handler:
            handler.write(img_data)

if __name__ == "__main__":
    images = get_instagram_images(INSTAGRAM_USERNAME)
    save_images(images, IMAGE_DIR)
