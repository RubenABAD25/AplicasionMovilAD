import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuscarPersonasPage } from './buscar-personas.page';

describe('BuscarPersonasPage', () => {
  let component: BuscarPersonasPage;
  let fixture: ComponentFixture<BuscarPersonasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarPersonasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarPersonasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
