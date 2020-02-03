import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarPersonasPage } from './listar-personas.page';

describe('ListarPersonasPage', () => {
  let component: ListarPersonasPage;
  let fixture: ComponentFixture<ListarPersonasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPersonasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarPersonasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
