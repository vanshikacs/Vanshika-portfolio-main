"""Portfolio backend API tests - contact form endpoints"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestContactAPI:
    """Contact form API tests"""

    def test_api_root(self):
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        assert "message" in response.json()

    def test_create_contact(self):
        payload = {"name": "TEST_User", "email": "test@example.com", "message": "TEST_Hello from test"}
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert data["name"] == "TEST_User"
        assert data["email"] == "test@example.com"
        assert data["message"] == "TEST_Hello from test"
        assert "id" in data
        assert "timestamp" in data
        print(f"PASS: Contact created with id={data['id']}")

    def test_get_contacts(self):
        response = requests.get(f"{BASE_URL}/api/contacts")
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        print(f"PASS: Got {len(data)} contacts")

    def test_contact_persisted(self):
        """Create then verify persistence"""
        payload = {"name": "TEST_Persist", "email": "persist@example.com", "message": "TEST_persist msg"}
        post_res = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert post_res.status_code == 200
        created_id = post_res.json()["id"]

        get_res = requests.get(f"{BASE_URL}/api/contacts")
        assert get_res.status_code == 200
        ids = [c["id"] for c in get_res.json()]
        assert created_id in ids
        print(f"PASS: Contact {created_id} persisted")

    def test_contact_missing_fields(self):
        """Missing required fields should return 422"""
        response = requests.post(f"{BASE_URL}/api/contact", json={"name": "Only Name"})
        assert response.status_code == 422
        print("PASS: Missing fields returns 422")
