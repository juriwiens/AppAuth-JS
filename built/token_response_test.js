"use strict";
/*
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var token_response_1 = require("./token_response");
describe('Token Response tests', function () {
    var accessToken = 'accessToken';
    it('Basic Token Response Tests', function () {
        var response = new token_response_1.TokenResponse(accessToken);
        expect(response).not.toBeNull();
        expect(response.accessToken).toBe(accessToken);
        expect(response.tokenType).toBe('bearer');
        expect(response.issuedAt).toBeTruthy();
        expect(response.isValid()).toBe(true);
        expect(response.refreshToken).toBeFalsy();
        expect(response.scope).toBeFalsy();
    });
    it('Test response token validity', function () {
        var response = new token_response_1.TokenResponse(accessToken, undefined /* refresh token */, undefined /* scope */, 'bearer', 1 /* issued at */, 1000 /* expires in*/);
        expect(response).not.toBeNull();
        expect(response.accessToken).toBe(accessToken);
        expect(response.tokenType).toBe('bearer');
        expect(response.issuedAt).toBeTruthy();
        expect(response.isValid()).toBe(false);
        expect(response.refreshToken).toBeFalsy();
        expect(response.scope).toBeFalsy();
    });
    it('To Json() and from Json() should work', function () {
        var response = new token_response_1.TokenResponse(accessToken);
        var json = JSON.parse(JSON.stringify(response.toJson()));
        var newResponse = token_response_1.TokenResponse.fromJson(json);
        expect(newResponse).not.toBeNull();
        expect(newResponse.accessToken).toBe(accessToken);
        expect(newResponse.tokenType).toBe('bearer');
        expect(newResponse.issuedAt).toBeTruthy();
        expect(newResponse.isValid()).toBe(true);
        expect(newResponse.refreshToken).toBeFalsy();
        expect(newResponse.scope).toBeFalsy();
    });
    it('Basic Token Error Tests', function () {
        var error = new token_response_1.TokenError('invalid_client');
        expect(error).toBeTruthy();
        expect(error.error).toBe('invalid_client');
        expect(error.errorDescription).toBeFalsy();
        expect(error.errorUri).toBeFalsy();
    });
    it('To Json and from JSON should work for errors', function () {
        var error = new token_response_1.TokenError('invalid_client');
        var json = JSON.parse(JSON.stringify(error.toJson()));
        var newError = token_response_1.TokenError.fromJson(json);
        expect(newError).toBeTruthy();
        expect(newError.error).toBe('invalid_client');
        expect(newError.errorDescription).toBeFalsy();
        expect(newError.errorUri).toBeFalsy();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW5fcmVzcG9uc2VfdGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy90b2tlbl9yZXNwb25zZV90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7O0dBWUc7O0FBRUgsbURBQTJEO0FBRTNELFFBQVEsQ0FBQyxzQkFBc0IsRUFBRTtJQUUvQixJQUFNLFdBQVcsR0FBRyxhQUFhLENBQUM7SUFFbEMsRUFBRSxDQUFDLDRCQUE0QixFQUFFO1FBQy9CLElBQUksUUFBUSxHQUFHLElBQUksOEJBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdkMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsOEJBQThCLEVBQUU7UUFDakMsSUFBSSxRQUFRLEdBQUcsSUFBSSw4QkFBYSxDQUM1QixXQUFXLEVBQ1gsU0FBUyxDQUFDLG1CQUFtQixFQUM3QixTQUFTLENBQUMsV0FBVyxFQUNyQixRQUFRLEVBQ1IsQ0FBQyxDQUFDLGVBQWUsRUFDakIs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QUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUM5QyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3hDLENBQUMsQ0FBQyxDQUFDO0FBRUwsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIEluYy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdFxuICogaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZVxuICogTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXJcbiAqIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtUb2tlbkVycm9yLCBUb2tlblJlc3BvbnNlfSBmcm9tICcuL3Rva2VuX3Jlc3BvbnNlJztcblxuZGVzY3JpYmUoJ1Rva2VuIFJlc3BvbnNlIHRlc3RzJywgKCkgPT4ge1xuXG4gIGNvbnN0IGFjY2Vzc1Rva2VuID0gJ2FjY2Vzc1Rva2VuJztcblxuICBpdCgnQmFzaWMgVG9rZW4gUmVzcG9uc2UgVGVzdHMnLCAoKSA9PiB7XG4gICAgbGV0IHJlc3BvbnNlID0gbmV3IFRva2VuUmVzcG9uc2UoYWNjZXNzVG9rZW4pO1xuICAgIGV4cGVjdChyZXNwb25zZSkubm90LnRvQmVOdWxsKCk7XG4gICAgZXhwZWN0KHJlc3BvbnNlLmFjY2Vzc1Rva2VuKS50b0JlKGFjY2Vzc1Rva2VuKTtcbiAgICBleHBlY3QocmVzcG9uc2UudG9rZW5UeXBlKS50b0JlKCdiZWFyZXInKTtcbiAgICBleHBlY3QocmVzcG9uc2UuaXNzdWVkQXQpLnRvQmVUcnV0aHkoKTtcbiAgICBleHBlY3QocmVzcG9uc2UuaXNWYWxpZCgpKS50b0JlKHRydWUpO1xuICAgIGV4cGVjdChyZXNwb25zZS5yZWZyZXNoVG9rZW4pLnRvQmVGYWxzeSgpO1xuICAgIGV4cGVjdChyZXNwb25zZS5zY29wZSkudG9CZUZhbHN5KCk7XG4gIH0pO1xuXG4gIGl0KCdUZXN0IHJlc3BvbnNlIHRva2VuIHZhbGlkaXR5JywgKCkgPT4ge1xuICAgIGxldCByZXNwb25zZSA9IG5ldyBUb2tlblJlc3BvbnNlKFxuICAgICAgICBhY2Nlc3NUb2tlbixcbiAgICAgICAgdW5kZWZpbmVkIC8qIHJlZnJlc2ggdG9rZW4gKi8sXG4gICAgICAgIHVuZGVmaW5lZCAvKiBzY29wZSAqLyxcbiAgICAgICAgJ2JlYXJlcicsXG4gICAgICAgIDEgLyogaXNzdWVkIGF0ICovLFxuICAgICAgICAxMDAwIC8qIGV4cGlyZXMgaW4qL1xuICAgICk7XG5cbiAgICBleHBlY3QocmVzcG9uc2UpLm5vdC50b0JlTnVsbCgpO1xuICAgIGV4cGVjdChyZXNwb25zZS5hY2Nlc3NUb2tlbikudG9CZShhY2Nlc3NUb2tlbik7XG4gICAgZXhwZWN0KHJlc3BvbnNlLnRva2VuVHlwZSkudG9CZSgnYmVhcmVyJyk7XG4gICAgZXhwZWN0KHJlc3BvbnNlLmlzc3VlZEF0KS50b0JlVHJ1dGh5KCk7XG4gICAgZXhwZWN0KHJlc3BvbnNlLmlzVmFsaWQoKSkudG9CZShmYWxzZSk7XG4gICAgZXhwZWN0KHJlc3BvbnNlLnJlZnJlc2hUb2tlbikudG9CZUZhbHN5KCk7XG4gICAgZXhwZWN0KHJlc3BvbnNlLnNjb3BlKS50b0JlRmFsc3koKTtcbiAgfSk7XG5cbiAgaXQoJ1RvIEpzb24oKSBhbmQgZnJvbSBKc29uKCkgc2hvdWxkIHdvcmsnLCAoKSA9PiB7XG4gICAgbGV0IHJlc3BvbnNlID0gbmV3IFRva2VuUmVzcG9uc2UoYWNjZXNzVG9rZW4pO1xuICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXNwb25zZS50b0pzb24oKSkpO1xuICAgIGxldCBuZXdSZXNwb25zZSA9IFRva2VuUmVzcG9uc2UuZnJvbUpzb24oanNvbik7XG4gICAgZXhwZWN0KG5ld1Jlc3BvbnNlKS5ub3QudG9CZU51bGwoKTtcbiAgICBleHBlY3QobmV3UmVzcG9uc2UuYWNjZXNzVG9rZW4pLnRvQmUoYWNjZXNzVG9rZW4pO1xuICAgIGV4cGVjdChuZXdSZXNwb25zZS50b2tlblR5cGUpLnRvQmUoJ2JlYXJlcicpO1xuICAgIGV4cGVjdChuZXdSZXNwb25zZS5pc3N1ZWRBdCkudG9CZVRydXRoeSgpO1xuICAgIGV4cGVjdChuZXdSZXNwb25zZS5pc1ZhbGlkKCkpLnRvQmUodHJ1ZSk7XG4gICAgZXhwZWN0KG5ld1Jlc3BvbnNlLnJlZnJlc2hUb2tlbikudG9CZUZhbHN5KCk7XG4gICAgZXhwZWN0KG5ld1Jlc3BvbnNlLnNjb3BlKS50b0JlRmFsc3koKTtcbiAgfSk7XG5cbiAgaXQoJ0Jhc2ljIFRva2VuIEVycm9yIFRlc3RzJywgKCkgPT4ge1xuICAgIGxldCBlcnJvciA9IG5ldyBUb2tlbkVycm9yKCdpbnZhbGlkX2NsaWVudCcpO1xuICAgIGV4cGVjdChlcnJvcikudG9CZVRydXRoeSgpO1xuICAgIGV4cGVjdChlcnJvci5lcnJvcikudG9CZSgnaW52YWxpZF9jbGllbnQnKTtcbiAgICBleHBlY3QoZXJyb3IuZXJyb3JEZXNjcmlwdGlvbikudG9CZUZhbHN5KCk7XG4gICAgZXhwZWN0KGVycm9yLmVycm9yVXJpKS50b0JlRmFsc3koKTtcbiAgfSk7XG5cbiAgaXQoJ1RvIEpzb24gYW5kIGZyb20gSlNPTiBzaG91bGQgd29yayBmb3IgZXJyb3JzJywgKCkgPT4ge1xuICAgIGxldCBlcnJvciA9IG5ldyBUb2tlbkVycm9yKCdpbnZhbGlkX2NsaWVudCcpO1xuICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlcnJvci50b0pzb24oKSkpO1xuICAgIGxldCBuZXdFcnJvciA9IFRva2VuRXJyb3IuZnJvbUpzb24oanNvbik7XG4gICAgZXhwZWN0KG5ld0Vycm9yKS50b0JlVHJ1dGh5KCk7XG4gICAgZXhwZWN0KG5ld0Vycm9yLmVycm9yKS50b0JlKCdpbnZhbGlkX2NsaWVudCcpO1xuICAgIGV4cGVjdChuZXdFcnJvci5lcnJvckRlc2NyaXB0aW9uKS50b0JlRmFsc3koKTtcbiAgICBleHBlY3QobmV3RXJyb3IuZXJyb3JVcmkpLnRvQmVGYWxzeSgpO1xuICB9KTtcblxufSk7XG4iXX0=